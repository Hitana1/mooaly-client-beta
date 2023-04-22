import type { FC } from "react";
import { useState } from "react";
import Dropdown from "rc-dropdown";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Button, ButtonVariants } from "@/components/button";
import { GearFilled, MenuOutlined } from "@/components/icons";
import { selectAuthAccessToken } from "@/store/auth";
import { AppRoutes } from "@/utils/constants";
import { SettingsOverlay } from "../settings-overlay";
import { UserOverlay } from "../user-overlay";
import { Typography, TypographyVariants } from "@/components/typography";
import type { ControlsProps } from "./controls.types";

import styles from "./controls.module.scss";

const Controls: FC<ControlsProps> = ({ onMobileMenuOpen }) => {
    const accessToken = useSelector(selectAuthAccessToken);
    const { t } = useTranslation();
    const [isSettingsDropdownVisible, setIsSettingsDropdownVisible] = useState(false);
    const [isUserDropdownVisible, setIsUserDropdownVisible] = useState(false);
    const navigate = useNavigate();
    // Handlers
    const onSignIn = () => {
        navigate(AppRoutes.SIGN_IN);
    };
    const onSignUp = () => {
        navigate(AppRoutes.SIGN_UP);
    };
    const onSettingsDropdownVisibilityChange = (isVisible: boolean) => {
        setIsSettingsDropdownVisible(isVisible);
    };
    const onUserDropdownVisibilityChange = (isVisible: boolean) => {
        setIsUserDropdownVisible(isVisible);
    };
    const onUserDropdownClose = () => {
        setIsUserDropdownVisible(false);
    };
    // View
    return (
        <div className={styles.Controls}>
            <Button
                variant={ButtonVariants.GHOST}
                icon={MenuOutlined}
                className={styles.mobileMenu}
                onClick={onMobileMenuOpen}
                isRounded
            />
            <Dropdown
                trigger={["click"]}
                overlay={<SettingsOverlay />}
                visible={isSettingsDropdownVisible}
                onVisibleChange={onSettingsDropdownVisibilityChange}
            >
                <Button icon={GearFilled} variant={ButtonVariants.SECONDARY} isRounded />
            </Dropdown>
            {accessToken === null ? (
                <>
                    <Button className={styles.signInBtn} variant={ButtonVariants.SECONDARY} onClick={onSignIn}>
                        {t("common.app-header.controls.sign-in")}
                    </Button>
                    <Button className={styles.signUpBtn} onClick={onSignUp}>
                        {t("common.app-header.controls.get-started")}
                    </Button>
                </>
            ) : (
                <Dropdown
                    trigger={["click"]}
                    overlay={<UserOverlay onClose={onUserDropdownClose} />}
                    visible={isUserDropdownVisible}
                    onVisibleChange={onUserDropdownVisibilityChange}
                >
                    <div className={styles.user} title={"Ararat Matinyan"}>
                        <img
                            src={"https://i1.sndcdn.com/avatars-000324882668-h5869b-t200x200.jpg"}
                            className={styles.avatar}
                            alt={"avatar"}
                        />
                        <Typography className={styles.name} variant={TypographyVariants.MINI_BUTTON_LABEL}>
                            Ararat Matinyan
                        </Typography>
                    </div>
                </Dropdown>
            )}
        </div>
    );
};
export default Controls;
