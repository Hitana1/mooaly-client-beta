import type { FC } from "react";
import { useTranslation } from "react-i18next";

import type { PageProps } from "@/utils/types";
import { useDocumentTitle } from "@/utils/hooks";
import { Page } from "@/components/page";
import { Typography, TypographyVariants } from "@/components/typography";

import styles from "./terms-of-use.module.scss";

const TermsOfUse: FC<PageProps> = ({ title }) => {
    const { t } = useTranslation();
    useDocumentTitle(title ? t(title) : null);
    // View
    return (
        <Page className={styles.TermsOfUse}>
            <Typography variant={TypographyVariants.HEADLINE_1} className={styles.title}>
                {t("terms-of-use.title")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.termTitle}>
                {t("terms-of-use.introduction.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.termContent}>
                {t("terms-of-use.introduction.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.termTitle}>
                {t("terms-of-use.account-creation.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.termContent}>
                {t("terms-of-use.account-creation.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.termTitle}>
                {t("terms-of-use.proprietary-rights.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.termContent}>
                {t("terms-of-use.proprietary-rights.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.termTitle}>
                {t("terms-of-use.use-of-service.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.termContent}>
                {t("terms-of-use.use-of-service.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.termTitle}>
                {t("terms-of-use.limitation-of-liability.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.termContent}>
                {t("terms-of-use.limitation-of-liability.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.termTitle}>
                {t("terms-of-use.termination-of-service.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.termContent}>
                {t("terms-of-use.termination-of-service.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.termTitle}>
                {t("terms-of-use.changes-to-terms-of-use.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.termContent}>
                {t("terms-of-use.changes-to-terms-of-use.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.termTitle}>
                {t("terms-of-use.entire-agreement.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.termContent}>
                {t("terms-of-use.entire-agreement.content")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.afterword}>
                {t("terms-of-use.afterword")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.lastUpdated}>
                {t("terms-of-use.last-updated", { date: "1.03.2023" })}
            </Typography>
        </Page>
    );
};
export default TermsOfUse;
