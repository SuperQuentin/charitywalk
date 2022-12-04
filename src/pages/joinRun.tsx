import type { ReactElement } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import type { NextPageWithLayout } from "./_app";

const JoinRun: NextPageWithLayout = () => {
		const runs = [
			{ id:0, eventName: "Amnesty international", date: "15 décembre 2021", img: "/trek1.jpeg", runDistance: 12, startPos: "Yverdon", endPos: "Yvonand" },
			{ id:1, eventName: "Amnesty international", date: "8 novembre 2021", img: "/trek1.jpeg", runDistance: 22, startPos: "Yverdon", endPos: "Estavayer" },
			{ id:2, eventName: "La croix rouge", date: "3 août 2022", img: "/trek2.jpeg", runDistance: 30, startPos: "Morat", endPos: "Morat" }
		]

		const data = runs.map((run) => (
			<div key={run.id} style={{"backgroundImage": "url("+ run.img +")"}} className={'bg-cover rounded-md m-10 pt-[100px] pb-[100px] h-[250px] w-[350px] pl-2 pr-2 bg-violet-400'}>
				<div className="text-white text-xl font-bold">Sample text</div>
				<button className="bg-violet-50 select-none p-3 rounded-3xl hover:bg-violet-600 hover:text-white transition">Join this run</button>
			</div>
		));

    return (
		<div>
			<h1 className="mt-[150px] text-3xl text-center">Join a run from an event</h1>
			<div className="flex flex-wrap mt-[70px] justify-items-center items-center w-11/12">
				{data}
			</div>
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