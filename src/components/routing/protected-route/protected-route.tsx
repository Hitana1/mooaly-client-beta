import { Suspense } from "react";
import type { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { AppRoutes, AppRoutesAccesses } from "@/utils/constants";
import { selectAuthAccessToken } from "@/store/auth";
import type { ProtectedRouteProps } from "./protected-route.types";
import { LoadingPage } from "@/components/loading-page";

const ProtectedRoute: FC<ProtectedRouteProps> = ({ title, element: Element, meta }) => {
    const accessToken = useSelector(selectAuthAccessToken);
    const location = useLocation();
    if (meta.access === AppRoutesAccesses.FOR_USERS && accessToken === null) {
        return <Navigate to={AppRoutes.SIGN_IN} state={{ from: location }} replace />;
    }
    if (meta.access === AppRoutesAccesses.FOR_GUESTS && accessToken !== null) {
        return <Navigate to={AppRoutes.DASHBOARD} state={{ from: location }} replace />;
    }
    return (
        <Suspense fallback={<LoadingPage />}>
            <Element title={title} />
        </Suspense>
    );
};
export default ProtectedRoute;
