import type { FC } from "react";
import { Outlet } from "react-router-dom";

import { AppHeader } from "@/components/app-header";

const RootRoute: FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <AppHeader />
            <Outlet />
        </div>
    );
};
export default RootRoute;
