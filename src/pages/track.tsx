import type { ReactElement } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import type { NextPageWithLayout } from "./_app";

const Track: NextPageWithLayout = () => {
    return (
        <div>test</div>
    )
}

Track.getLayout = function getLayout(page: ReactElement) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}

export default Track;