import type { FC } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router-dom";

import type { MobileMenuProps } from "./mobile-menu.types";
import { ReactComponent as AppLogoDark } from "@/assets/images/app-logo-for-light-theme.svg";
import { ReactComponent as AppLogoLight } from "@/assets/images/app-logo-for-dark-theme.svg";
import { AppColorThemes, selectUiAppColorTheme } from "@/store/ui";
import { selectAuthAccessToken } from "@/store/auth";
import { Button, ButtonSizes, ButtonVariants } from "@/components/button";
import { CloseFilled } from "@/components/icons";
import { AppRoutes } from "@/utils/constants";
import { guestRoutes, usersRoutes } from "@/components/app-header/app-header.constants";
import { Typography, TypographyVariants } from "@/components/typography";
import { uuid } from "@/utils/lib";

import styles from "./mobile-menu.module.scss";

const MobileMenu: FC<MobileMenuProps> = ({ onClose }) => {
    const appColorTheme = useSelector(selectUiAppColorTheme);
    const accessToken = useSelector(selectAuthAccessToken);
    const { t } = useTranslation();
    const navigate = useNavigate();
    // Handlers
    const onSignIn = () => {
        navigate(AppRoutes.SIGN_IN);
    };
    const onSignUp = () => {
        navigate(AppRoutes.SIGN_UP);
    };
    // View
    return createPortal(
        <div className={styles.MobileMenu}>
            <div className={styles.header}>
                <Link to={accessToken ? AppRoutes.DASHBOARD : AppRoutes.HOME}>
                    {appColorTheme === AppColorThemes.LIGHT ? <AppLogoDark /> : <AppLogoLight />}
                </Link>
                <Button icon={CloseFilled} variant={ButtonVariants.GHOST} isRounded onClick={onClose} />
            </div>
            <div className={styles.navLinks}>
                {accessToken === null
                    ? guestRoutes.map(({ name, to }) => (
                          <Typography variant={TypographyVariants.SUBTITLE_SEMI_BOLD} key={uuid()}>
                              <NavLink
                                  to={to}
                                  className={({ isActive }) =>
                                      classNames(styles.navLink, { [styles.isActive]: isActive })
                                  }
                              >
                                  {t(name)}
                              </NavLink>
                          </Typography>
                      ))
                    : usersRoutes.map(({ name, to }) => (
                          <Typography variant={TypographyVariants.SUBTITLE_SEMI_BOLD} key={uuid()}>
                              <NavLink
                                  to={to}
                                  className={({ isActive }) =>
                                      classNames(styles.navLink, { [styles.isActive]: isActive })
                                  }
                              >
                                  {t(name)}
                              </NavLink>
                          </Typography>
                      ))}
            </div>

            {accessToken === null ? (
                <>
                    <hr className={styles.divider} />
                    <div className={styles.authButtons}>
                        <Button
                            className={styles.signInBtn}
                            size={ButtonSizes.LARGE}
                            variant={ButtonVariants.SECONDARY}
                            onClick={onSignIn}
                        >
                            {t("common.app-header.controls.sign-in")}
                        </Button>
                        <Button className={styles.signUpBtn} size={ButtonSizes.LARGE} onClick={onSignUp}>
                            {t("common.app-header.controls.get-started")}
                        </Button>
                    </div>
                </>
            ) : null}
        </div>,
        document.getElementById("mobile-menu") as HTMLElement,
    );
};
export default MobileMenu;
