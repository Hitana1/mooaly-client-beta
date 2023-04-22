import type { FC, MouseEventHandler } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { Typography, TypographyVariants } from "@/components/typography";
import { Switch } from "@/components/switch";
import { useAppDispatch } from "@/utils/hooks";
import { AppColorThemes, selectUiAppColorTheme, setAppColorTheme } from "@/store/ui";
import { CaretRightFilled, CaretLeftFilled } from "@/components/icons";
import { languages } from ".//settings-overlay.constants";
import { uuid } from "@/utils/lib";
import { DropdownMenu } from "@/components/dropdown-menu";

import styles from "./settings-overlay.module.scss";

const SettingsOverlay: FC = () => {
    const appColorTheme = useSelector(selectUiAppColorTheme);
    const dispatch = useAppDispatch();
    const { t, i18n } = useTranslation();
    const [isLanguageSelectSectionOpen, setIsLanguageSelectSectionOpen] = useState(false);
    // Handlers
    const onAppColorThemeChange = () => {
        dispatch(
            setAppColorTheme({
                newAppColorTheme: appColorTheme === AppColorThemes.LIGHT ? AppColorThemes.DARK : AppColorThemes.LIGHT,
            }),
        );
    };
    const onLanguageSelectSectionOpen = () => {
        setIsLanguageSelectSectionOpen(true);
    };
    const onLanguageSelectSectionClose = () => {
        setIsLanguageSelectSectionOpen(false);
    };
    const onLanguageSelect: MouseEventHandler<HTMLDivElement> = e => {
        if ("value" in e.currentTarget.dataset) {
            i18n.changeLanguage(e.currentTarget.dataset["value"]);
        }
    };
    // View
    return (
        <DropdownMenu className={styles.SettingsOverlay}>
            {isLanguageSelectSectionOpen ? (
                <>
                    <DropdownMenu.Item
                        className={classNames(styles.item, styles.back)}
                        onClick={onLanguageSelectSectionClose}
                    >
                        <CaretLeftFilled width={16} height={16} />
                        <Typography variant={TypographyVariants.TEXT_BOLD}>
                            {t("common.app-header.controls.settings-overlay.back")}
                        </Typography>
                    </DropdownMenu.Item>
                    {languages.map(({ name, value }) => (
                        <DropdownMenu.Item
                            className={classNames(styles.item, styles.language, {
                                [styles.isSelected]: i18n.language === value,
                            })}
                            onClick={onLanguageSelect}
                            data-value={value}
                            key={uuid()}
                        >
                            <Typography variant={TypographyVariants.TEXT_BOLD}>{name}</Typography>
                            <Typography className={styles.shortVersion} variant={TypographyVariants.TEXT}>
                                {value}
                            </Typography>
                        </DropdownMenu.Item>
                    ))}
                </>
            ) : (
                <>
                    <DropdownMenu.Item className={styles.item}>
                        <Typography variant={TypographyVariants.TEXT_BOLD}>
                            {t("common.app-header.controls.settings-overlay.dark-theme")}
                        </Typography>
                        <Switch checked={appColorTheme === AppColorThemes.DARK} onChange={onAppColorThemeChange} />
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        className={classNames(styles.item, styles.languageSection)}
                        onClick={onLanguageSelectSectionOpen}
                    >
                        <Typography variant={TypographyVariants.TEXT_BOLD}>
                            {t("common.app-header.controls.settings-overlay.language")}
                        </Typography>
                        <CaretRightFilled width={16} height={16} />
                    </DropdownMenu.Item>
                </>
            )}
        </DropdownMenu>
    );
};
export default SettingsOverlay;
