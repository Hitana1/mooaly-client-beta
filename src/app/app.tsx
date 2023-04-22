import type { FC } from "react";
import { useLayoutEffect } from "react";
import { useQuery } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/utils/hooks";
import { AuthService } from "@/utils/services";
import { QueryKeys } from "@/utils/constants";
import { signIn, signOut, selectAuthAccessToken } from "@/store/auth";
import { selectUiAppColorTheme } from "@/store/ui";
import { appRoutes } from "@/config";
import { ProtectedRoute, RootRoute } from "@/components/routing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootRoute />,
        children: appRoutes.map(({ title, path, element, meta }) => ({
            path,
            element: <ProtectedRoute title={title} element={element} meta={meta} />,
        })),
    },
]);
const App: FC = () => {
    const dispatch = useAppDispatch();
    // Check authentication
    const accessToken = useSelector(selectAuthAccessToken);
    const { isLoading } = useQuery([QueryKeys.VERIFY_ACCESS_TOKEN], AuthService.verifyAccessToken, {
        onSuccess({ accessToken }) {
            dispatch(signIn({ accessToken }));
        },
        onError() {
            dispatch(signOut());
        },
        retry: 0,
        enabled: accessToken !== null,
    });
    // Check app color theme
    const appColorTheme = useSelector(selectUiAppColorTheme);
    useLayoutEffect(() => {
        document.documentElement.dataset["theme"] = appColorTheme;
    }, [appColorTheme]);
    // View
    return isLoading ? null : <RouterProvider router={router} />;
};
export default App;
