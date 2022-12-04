import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import MapComponent from "../components/MapComponent";
import type { fromLonLat } from "ol/proj";
import type { Coordinate } from 'ol/coordinate';
import { ReactElement, useEffect, useState } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import type { NextPageWithLayout } from "./_app";
import type { Runner, Event, Route } from '../types/interfaces';

// ROUTES
const routeA: Route = { waypoints: []};
const routeB: Route = { waypoints: []};
routeA.waypoints.push([ 6.563129, 46.518873 ])
routeA.waypoints.push([ 6.563261, 46.518873 ])
routeA.waypoints.push([ 6.563588, 46.519104 ])
routeA.waypoints.push([ 6.563583, 46.519121 ])
routeA.waypoints.push([ 6.563635, 46.519156 ])
routeA.waypoints.push([ 6.563662, 46.519157 ])
routeA.waypoints.push([ 6.563685, 46.519172 ])
routeA.waypoints.push([ 6.563684, 46.519191 ])
routeA.waypoints.push([ 6.563736, 46.519227 ])
routeA.waypoints.push([ 6.56377, 46.519227 ])
routeA.waypoints.push([ 6.563856, 46.519296 ])
routeA.waypoints.push([ 6.563939, 46.519298 ])
routeA.waypoints.push([ 6.564141, 46.519452 ])
routeA.waypoints.push([ 6.564177, 46.519479 ])
routeA.waypoints.push([ 6.564176, 46.519596 ])
routeA.waypoints.push([ 6.564195, 46.519607 ])
routeA.waypoints.push([ 6.564229, 46.519608 ])
routeA.waypoints.push([ 6.564285, 46.519591 ])
routeA.waypoints.push([ 6.564371, 46.51965 ])
routeA.waypoints.push([ 6.564368, 46.519687 ])
routeA.waypoints.push([ 6.564398, 46.519707 ])
routeA.waypoints.push([ 6.564409, 46.519699 ])
routeA.waypoints.push([ 6.564493, 46.51976 ])
routeA.waypoints.push([ 6.564474, 46.519771 ])
routeA.waypoints.push([ 6.564384, 46.519754 ])
routeA.waypoints.push([ 6.564316, 46.519793 ])
routeA.waypoints.push([ 6.564251, 46.519798 ])
routeA.waypoints.push([ 6.564213, 46.519815 ])
routeA.waypoints.push([ 6.564234, 46.519848 ])
routeA.waypoints.push([ 6.564242, 46.519925 ])
routeA.waypoints.push([ 6.564189, 46.519984 ])
routeA.waypoints.push([ 6.564191, 46.520271 ])
routeB.waypoints.push([ 6.564408, 46.520272 ])
routeB.waypoints.push([ 6.564649, 46.520274 ])
routeB.waypoints.push([ 6.565115, 46.520278 ])
routeB.waypoints.push([ 6.565406, 46.520283 ])
routeB.waypoints.push([ 6.565057, 46.522062 ])
routeB.waypoints.push([ 6.564618, 46.522094 ])
routeB.waypoints.push([ 6.564482, 46.522114 ])
routeB.waypoints.push([ 6.564453, 46.522119 ])
routeB.waypoints.push([ 6.564288, 46.522145 ])
routeB.waypoints.push([ 6.564237, 46.522045 ])
routeB.waypoints.push([ 6.564195, 46.521998 ])
routeB.waypoints.push([ 6.564152, 46.521963 ])
routeB.waypoints.push([ 6.564204, 46.52189 ])
routeB.waypoints.push([ 6.564072, 46.521843 ])
routeB.waypoints.push([ 6.564009, 46.521835 ])
routeB.waypoints.push([ 6.563739, 46.521818 ])
routeB.waypoints.push([ 6.563488, 46.521806 ])
routeB.waypoints.push([ 6.563361, 46.521777 ])
routeB.waypoints.push([ 6.56332, 46.521759 ])
routeB.waypoints.push([ 6.563288, 46.521745 ])
routeB.waypoints.push([ 6.563179, 46.521666 ])
routeB.waypoints.push([ 6.563134, 46.521612 ])
routeB.waypoints.push([ 6.563055, 46.521498 ])
routeB.waypoints.push([ 6.562976, 46.521355 ])
routeB.waypoints.push([ 6.562955, 46.5213 ])
routeB.waypoints.push([ 6.562898, 46.521201 ])
routeB.waypoints.push([ 6.562889, 46.521186 ])
routeB.waypoints.push([ 6.562507, 46.520545 ])
routeB.waypoints.push([ 6.562454, 46.520452 ])
routeB.waypoints.push([ 6.562396, 46.520352 ])
routeB.waypoints.push([ 6.562319, 46.520361 ])
routeB.waypoints.push([ 6.562248, 46.520251 ])
routeB.waypoints.push([ 6.562012, 46.519815 ])
routeB.waypoints.push([ 6.561582, 46.519058 ])

const routes = [routeA, routeB];


// Generate random runners
const DUMMY_RUNNERS: Runner[] = [];
const REFRESH_RUNNERS_MS = 3000;
const TEMP_WEIGHT = .001;

for (let i = 0; i < 10; ++i) {
  DUMMY_RUNNERS.push({id: i, latestTrackpoint: [6.561901 + Math.random() * TEMP_WEIGHT, 46.518885 + Math.random() * TEMP_WEIGHT], firstname:"firstname" + i, lastname:"lastname" + i});
}
const Home: NextPageWithLayout = () => {
  const [runners, setRunners] = useState<Runner[]>([]);
  const [stupidRefresh, setStupidRefresh] = useState<boolean>(false);

  const accounts = trpc.user.getAllAccount.useQuery();

  useEffect(() => {
    // Fetch runners periodically
    setInterval(async () => {
      setStupidRefresh((tamaman) => !tamaman);
      // Simulate database update
      /*for (let i = 0; i < DUMMY_RUNNERS.length; ++i) {
        DUMMY_RUNNERS[i].latestTrackpoint[0] += (Math.random() - .5) * TEMP_WEIGHT;
        DUMMY_RUNNERS[i].latestTrackpoint[1] += (Math.random() - .5) * TEMP_WEIGHT;
      }*/

      const updatedRunners: Runner[] = [];

      const acc = await accounts.refetch();
    
      for (let i = 0; i < acc.data?.length; ++i) {
        const currentRunner: Runner = {};
        currentRunner.id = acc.data[i].userId;
        currentRunner.firstname = acc.data[i]?.firstname;
        currentRunner.lastname = acc.data[i]?.lastname;
        const atPos = acc.data[i]?.email.indexOf("@");
        currentRunner.firstname = acc.data[i]?.email?.substring(0, atPos);
        currentRunner.lastname = acc.data[i]?.email?.substring(atPos + 1);
        currentRunner.latestTrackpoint = acc.data[i].st_aslatlontext;
        currentRunner.latestTrackpoint = currentRunner.latestTrackpoint.split(" ");
        currentRunner.latestTrackpoint.reverse();

        updatedRunners.push(currentRunner);
      }

      // refresh degeulasse
      setRunners([...updatedRunners]);
    }, REFRESH_RUNNERS_MS);
  }, []);

  return (
    <>
      <Head>
        <title>Marchadon</title>
        <meta name="description" content="Lauzhack marchadon" />
        <link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="/ol.css"></link>
      </Head>
      <div className="flex flex-col items-center w-full">
        <MapComponent runners={runners} routes={routes}/>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}



export default Home;
