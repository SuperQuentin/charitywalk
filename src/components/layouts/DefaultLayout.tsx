import type { ReactElement } from "react";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const DefaultLayout = ({ children }: { children: ReactElement }) => {

    const { data: session } = useSession();

    return (
        <>
            <Head>
                <title>Charity Walk</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <nav className="bg-violet-50 z-10 w-full py-4 fixed">
                <div className="mx-auto max-w-7xl">
                    <div className="w-full flex justify-between">
                        <Link href="/">
                            <h1 className="font-bold text-3xl py-2 px-4 text-neutral-800 hover:text-violet-500 transition delay-[25]">
                                CharityWalk
                            </h1>
                        </Link>

                        <div className="flex space-x-4 items-center">
                            <Link href="/joinRun" className="transition pr-8 pl-8 hover:text-violet-700">
                                <div>Join a run</div>
                            </Link>
                            <Link href="/sponsorSomeone" className="transition pr-8 pl-8 hover:text-violet-700">
                                <div>Sponsor someone</div>
                            </Link>
                            <Link href="/about" className="transition pr-8 pl-8 hover:text-violet-700">
                                <div>About</div>
                            </Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            {
                                session ?
                                    (
                                        <>
                                            <div>Signed in as {session.user?.email}</div>
                                            <button className="px-3 py-2 bg-red-300 rounded-full hover:bg-red-500 text-red-800 delay-[25] transition font-bold" onClick={() => signOut()} >Logout</button>
                                        </>

                                    ) : (
                                        <button className="px-3 py-2 bg-neutral-300 rounded-3xl hover:bg-neutral-500 text-neutral-800 delay-75 transition font-bold hover:text-violet-100" onClick={() => signIn()} >Login</button>
                                    )

                            }
                        </div>
                    </div>
                </div>
            </nav>
            <main className="flex min-h-screen flex-col items-center justify-center">
                {children}
            </main>
        </>
    )
}

export default DefaultLayout;