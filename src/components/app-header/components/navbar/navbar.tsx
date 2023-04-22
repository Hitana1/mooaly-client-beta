import type { FC } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { guestRoutes, usersRoutes } from "../../app-header.constants";
import { Typography, TypographyVariants } from "@/components/typography";
import { uuid } from "@/utils/lib";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { selectAuthAccessToken } from "@/store/auth";

import styles from "./navbar.module.scss";

const Navbar: FC = () => {
    const accessToken = useSelector(selectAuthAccessToken);
    const { t } = useTranslation();
    // View
    return (
        <nav className={styles.Navbar}>
            {accessToken === null
                ? guestRoutes.map(({ name, to }) => (
                      <Typography variant={TypographyVariants.SUBTITLE_SEMI_BOLD} key={uuid()}>
                          <NavLink
                              to={to}
                              className={({ isActive }) => classNames(styles.navLink, { [styles.isActive]: isActive })}
                          >
                              {t(name)}
                          </NavLink>
                      </Typography>
                  ))
                : usersRoutes.map(({ name, to }) => (
                      <Typography variant={TypographyVariants.SUBTITLE_SEMI_BOLD} key={uuid()}>
                          <NavLink
                              to={to}
                              className={({ isActive }) => classNames(styles.navLink, { [styles.isActive]: isActive })}
                          >
                              {t(name)}
                          </NavLink>
                      </Typography>
                  ))}
        </nav>
    );
};
export default Navbar;
