import type { ReactElement } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { Runner } from "../types/interfaces";
import type { NextPageWithLayout } from "./_app";

const SponsorSomeone: NextPageWithLayout = () => {
	const runners: Runner[] = [];
	const TEMP_WEIGHT = .01;

	for (let i = 0; i < 10; ++i) {
		runners.push({id: i, latestTrackpoint: [6.561901 + Math.random() * TEMP_WEIGHT, 46.518885 + Math.random() * TEMP_WEIGHT], firstname:"firstname" + i, lastname:"lastname" + i});
	}

	return (
		<div>
			<h1 className="mt-[150px] text-3xl text-center">Sponsor someone</h1>
			<form action="sponsor" method="POST" className="flex flex-col m-10 p-10 bg-violet-50 drop-shadow-xl">
				<input name="userToSponsor" type="text" className="m-10 drop-shadow-md"/>
				<datalist>
					{/*USERS*/}
				</datalist>
				<input type="number" className="m-10 drop-shadow-md"/>
				<input type="submit" className="m-10 drop-shadow-md bg-white rounded-xl pt-5 pb-5 w-1/2 ml-auto mr-auto hover:bg-violet-600 cursor-pointer select-none transition hover:text-white"/>
			</form>
		</div>
	)
}

SponsorSomeone.getLayout = function getLayout(page: ReactElement) {
	return (
		<DefaultLayout>
		{page}
		</DefaultLayout>
	)
}

export default SponsorSomeone;