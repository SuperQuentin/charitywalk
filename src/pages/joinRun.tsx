import { ReactElement, useEffect, useState } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import type { NextPageWithLayout } from "./_app";
import Image from "next/image";
import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react";


const JoinRun: NextPageWithLayout = () => {
	const [events, setEvents] = useState<any[]>([]);

	fetch("/api/sql", {
		method: "POST",
		body: `SELECT * FROM public."Event", public."RoutesOnEvents", public."Route"
		WHERE public."RoutesOnEvents"."eventId" = public."Event"."id"
		AND public."RoutesOnEvents"."routeId" = public."Route"."id"`
	 }).then(res => res.json())
	 .then(res => {
		console.log(res);
		setEvents(res);
	 })

	 useEffect(() => {
		//console.log(events);
	 }, [events]);

	const registerMutation = trpc.event.register.useMutation();

	const handleRegister = async (userId, eventId, routeId) => {
		await registerMutation.mutateAsync({
			userId,
			eventId,
			routeId,
		});
	};

	const session = useSession();

	return (
		<div className="max-w-7xl w-full">
			<section className="flex px-4 md:px-0 flex-col min-h-screen pt-28">
				<h1 className="mt-2 ml-2 mb-4 text-3xl font-bold">Join a run from an event</h1>

				<div className="flex md:grid flex-col w-full grid-cols-6 gap-6">
					{
						events.map((event) => {
							return (
								<div key={event.id} className="relative z-0 col-span-2 aspect-video rounded-3xl">

									<div className="absolute inset-0 -z-30 w-full h-full">
										<div className="absolute inset-0 bg-gradient-to-t -z-10 from-black to-transparent via-transparent rounded-3xl" />
										<Image src={"https://images.unsplash.com/photo-1600284536251-8bb98db53468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="" className="absolute -z-20 inset-0 rounded-3xl" layout="fill" objectFit="cover" />
									</div>

									<div className="py-4 px-6 w-full h-full flex flex-col-reverse justify-between items-end">
										<div className="flex w-full justify-between items-center">
											<div className="text-white text-xl font-bold h-fit"><div className="text-violet-400">{event.organisation}</div> {event.name}</div>


											{
												session.status === "authenticated" ? (

													<button onClick={() => handleRegister(session.data.user?.id, event.id, event.routes.at(0))} disabled={registerMutation.isLoading} className="bg-violet-50 select-none px-3 py-2 rounded-3xl hover:bg-violet-600 hover:text-white transition">Join this run</button>
												) : (<></>)
											}
										</div>
										<div className="flex bg-white px-3 py-1 max-w-fit rounded-full">
											<div className="font-bold">
												{(new Date(event.date)).toLocaleDateString()}
											</div>
										</div>
									</div>

								</div>
							)
						})
					}
				</div>
			</section >

		</div >
	)
}

JoinRun.getLayout = function getLayout(page: ReactElement) {
	return (
		<DefaultLayout>
			{page}
		</DefaultLayout>
	)
}

export default JoinRun;