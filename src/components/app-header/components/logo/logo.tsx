import type { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { AppRoutes } from "@/utils/constants";
import { AppColorThemes, selectUiAppColorTheme } from "@/store/ui";
import { selectAuthAccessToken } from "@/store/auth";
import { ReactComponent as AppLogoDark } from "@/assets/images/app-logo-for-light-theme.svg";
import { ReactComponent as AppLogoLight } from "@/assets/images/app-logo-for-dark-theme.svg";

import styles from "./logo.module.scss";

const Logo: FC = () => {
    const accessToken = useSelector(selectAuthAccessToken);
    const appColorTheme = useSelector(selectUiAppColorTheme);
    // View
    return (
        <div className={styles.Logo}>
            <Link to={accessToken ? AppRoutes.DASHBOARD : AppRoutes.HOME}>
                {appColorTheme === AppColorThemes.LIGHT ? <AppLogoDark /> : <AppLogoLight />}
            </Link>
        </div>
    );
};
export default Logo;
