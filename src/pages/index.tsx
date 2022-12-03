import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import MapComponent from "../components/MapComponent";
import { fromLonLat } from "ol/proj";
import type { Coordinate } from 'ol/coordinate';
import { useEffect, useState } from "react";

const Home: NextPage = () => {
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
      <main className="flex items-center">
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
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
