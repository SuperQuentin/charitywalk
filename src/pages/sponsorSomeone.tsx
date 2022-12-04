import type { ReactElement } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { Runner } from "../types/interfaces";
import type { NextPageWithLayout } from "./_app";

const SponsorSomeone: NextPageWithLayout = () => {
	const runners: Runner[] = [];
	const TEMP_WEIGHT = .01;

	for (let i = 0; i < 10; ++i) {
		runners.push({ id: i, latestTrackpoint: [6.561901 + Math.random() * TEMP_WEIGHT, 46.518885 + Math.random() * TEMP_WEIGHT], firstname: "firstname" + i, lastname: "lastname" + i });
	}

	return (
		<div className="max-w-7xl w-full">
			<section className="flex px-4 md:px-0 flex-col min-h-screen pt-28">
				<h1 className="mt-2 ml-2 mb-4 text-3xl font-bold">Sponsor someone</h1>

				<div className="flex flex-col md:flex-row md:grid grid-cols-12 gap-4 ">
					<div className="col-span-3 bg-green-500 rounded-lg">

					</div>
				</div>
			</section>
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