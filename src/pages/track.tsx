import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import type { NextPageWithLayout } from "./_app";
import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react";


const Track: NextPageWithLayout = () => {

    const [coords, setCoords] = useState({ lat: 0, long: 0 });
    const session = useSession();

    // mutation trpc call to create trackpoint
    const createTrackpoint = trpc.trackpoint.create.useMutation();

    useEffect(() => {

        const interval = setInterval(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setCoords({ lat: position.coords.latitude, long: position.coords.longitude });
                    createTrackpoint.mutateAsync({ lat: position.coords.latitude, long: position.coords.longitude, timestamp: +new Date() });
                });
            }
            if (coords.lat !== 0 && coords.long !== 0 && session) {
                createTrackpoint.mutateAsync({
                    timestamp: +new Date(),
                    lat: coords.lat,
                    long: coords.long,
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [coords, createTrackpoint, session]);

    return (
        <>
            <div>Track</div>
            <div>Latitude: {coords.lat}</div>
            <div>Longitude: {coords.long}</div>
        </>
    )
}

Track.getLayout = function getLayout(page: ReactElement) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}

export default Track;