import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Typography, TypographyVariants } from "@/components/typography";
import { signOut } from "@/store/auth";
import { useAppDispatch } from "@/utils/hooks";
import { DropdownMenu } from "@/components/dropdown-menu";
import type { UserOverlayProps } from "./user-overlay.types";
import { ExitFilled } from "@/components/icons";

import styles from "./user-overlay.module.scss";

const UserOverlay: FC<UserOverlayProps> = ({ onClose }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // Handlers
    const onAccountPageOpen = () => {
        navigate("/account");
        onUserOverlayClose();
    };
    const onSignOut = () => {
        dispatch(signOut());
        onUserOverlayClose();
    };
    const onUserOverlayClose = () => {
        if (typeof onClose === "function") {
            onClose();
        }
    };
    // View
    return (
        <DropdownMenu className={styles.UserOverlay}>
            <DropdownMenu.Item className={styles.item} onClick={onAccountPageOpen}>
                <Typography variant={TypographyVariants.TEXT_BOLD}>
                    {t("common.app-header.controls.user-overlay.account")}
                </Typography>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item} onClick={onSignOut}>
                <Typography variant={TypographyVariants.TEXT_BOLD}>
                    {t("common.app-header.controls.user-overlay.sign-out")}
                </Typography>
                <ExitFilled />
            </DropdownMenu.Item>
        </DropdownMenu>
    );
};
export default UserOverlay;
