import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import MapComponent from "../components/MapComponent";
import { fromLonLat } from "ol/proj";
import type { Coordinate } from 'ol/coordinate';
import { ReactElement, useEffect, useState } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  const [runners, setRunners] = useState<Coordinate[]>([]);

  useEffect(() => {
    setRunners([...runners, [6.561901, 46.518885]]); // EPFL position
  }, []);

  return (
    <>
      <Head>
        <title>Marchadon</title>
        <meta name="description" content="Lauzhack marchadon" />
        <link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="/ol.css"></link>
      </Head>
      <div className="flex items-center w-full">
        <MapComponent runners={runners}/>
        <button className="p-1 bg-orange-700" onClick={() => {
          setRunners([...runners, [6.562901, 46.519885]]); // EPFL position decalé
        }}>ADD A RUNNER</button>
        <br/>
        <div>Runners:<br/>
          <ul>
            {runners.map(runner => (<li key={runner[0]}>{`${runner[0]};${runner[1]}`}</li>))}
          </ul>
        </div>
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
