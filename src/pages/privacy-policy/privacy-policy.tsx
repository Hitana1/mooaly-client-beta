import type { FC } from "react";
import { useTranslation } from "react-i18next";

import type { PageProps } from "@/utils/types";
import { useDocumentTitle } from "@/utils/hooks";
import { Page } from "@/components/page";
import { Typography, TypographyVariants } from "@/components/typography";

import styles from "./privacy-policy.module.scss";

const PrivacyPolicy: FC<PageProps> = ({ title }) => {
    const { t } = useTranslation();
    useDocumentTitle(title ? t(title) : null);
    // View
    return (
        <Page className={styles.PrivacyPolicy}>
            <Typography variant={TypographyVariants.HEADLINE_1} className={styles.title}>
                {t("privacy-policy.title")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.policyTitle}>
                {t("privacy-policy.introduction.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.policyContent}>
                {t("privacy-policy.introduction.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.policyTitle}>
                {t("privacy-policy.information-collected.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.policyContent}>
                {t("privacy-policy.information-collected.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.policyTitle}>
                {t("privacy-policy.use-of-information.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.policyContent}>
                {t("privacy-policy.use-of-information.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.policyTitle}>
                {t("privacy-policy.sharing-of-information.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.policyContent}>
                {t("privacy-policy.sharing-of-information.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.policyTitle}>
                {t("privacy-policy.access-and-control-of-your-information.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.policyContent}>
                {t("privacy-policy.access-and-control-of-your-information.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.policyTitle}>
                {t("privacy-policy.data-security.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.policyContent}>
                {t("privacy-policy.data-security.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.policyTitle}>
                {t("privacy-policy.changes-to-this-privacy-policy.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.policyContent}>
                {t("privacy-policy.changes-to-this-privacy-policy.content")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.policyTitle}>
                {t("privacy-policy.contact-us.title")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.policyContent}>
                {t("privacy-policy.contact-us.content")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.afterword}>
                {t("privacy-policy.afterword", { date: "1.04.2023" })}
            </Typography>
        </Page>
    );
};
export default PrivacyPolicy;
