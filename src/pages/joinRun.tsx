import type { ReactElement } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import type { NextPageWithLayout } from "./_app";
import Image from "next/image";
import { trpc } from "../utils/trpc";

const events = trpc.event.getAll.useQuery();

const JoinRun: NextPageWithLayout = () => {

	const runs = [
		{ id: 0, eventName: "Amnesty international", date: "15 décembre 2021", img: "/trek1.jpeg", runDistance: 12, startPos: "Yverdon", endPos: "Yvonand" },
		{ id: 1, eventName: "Amnesty international", date: "8 novembre 2021", img: "/trek1.jpeg", runDistance: 22, startPos: "Yverdon", endPos: "Estavayer" },
		{ id: 2, eventName: "La croix rouge", date: "3 août 2022", img: "/trek2.jpeg", runDistance: 30, startPos: "Morat", endPos: "Morat" }
	]

	const data = runs.map((run) => (
		<div key={run.id} className="relative z-0 col-span-2 aspect-video rounded-3xl">

			<div className="absolute inset-0 -z-30 w-full h-full">
				<div className="absolute inset-0 bg-gradient-to-t -z-10 from-black to-transparent via-transparent rounded-3xl" />
				<Image src={run.img} alt="" className="absolute -z-20 inset-0 rounded-3xl" layout="fill" objectFit="cover" />
			</div>

			<div className="py-4 px-6 w-full h-full flex flex-col-reverse justify-between items-end">
				<div className="flex w-full justify-between items-center">
					<div className="text-white text-xl font-bold">Sample text</div>
					<button className="bg-violet-50 select-none px-3 py-2 rounded-3xl hover:bg-violet-600 hover:text-white transition">Join this run</button>
				</div>
				<div className="flex bg-white px-3 py-1 max-w-fit rounded-full">
					<div className="font-bold">
						{run.date}
					</div>
				</div>
			</div>

		</div>
	));

	return (
		<div className="max-w-7xl w-full">
			<section className="flex px-4 md:px-0 flex-col min-h-screen pt-28">
				<h1 className="mt-2 ml-2 mb-4 text-3xl font-bold">Join a run from an event</h1>

				<div className="flex md:grid flex-col w-full grid-cols-6 gap-6">
					{data}
				</div>
			</section>

		</div>
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