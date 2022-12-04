import type { ReactElement } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
    return (
        <div className="text-3xl text-center">Sample about page</div>
    )
}

About.getLayout = function getLayout(page: ReactElement) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}

export default About;