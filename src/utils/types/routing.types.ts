import { FC } from "react";

import { AppRoutesAccesses, AppRoutes } from "../constants";

export type Route = {
    title: string | null;
    path: AppRoutes;
    element: FC<PageProps>;
    meta: {
        access: AppRoutesAccesses;
    };
};
export type PageProps = {
    title: Route["title"];
};
