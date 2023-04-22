import type { FC } from "react";
import { useTranslation } from "react-i18next";

import type { PageProps } from "@/utils/types";
import { useDocumentTitle } from "@/utils/hooks";
import { Page } from "@/components/page";
import { Typography, TypographyVariants } from "@/components/typography";

import styles from "./faq.module.scss";

const FAQ: FC<PageProps> = ({ title }) => {
    const { t } = useTranslation();
    useDocumentTitle(title ? t(title) : null);
    // View
    return (
        <Page className={styles.FAQ}>
            <Typography variant={TypographyVariants.HEADLINE_1} className={styles.title}>
                {t("faq.title")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.questionTitle}>
                {t("faq.what-is-finny.question")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.questionAnswer}>
                {t("faq.what-is-finny.answer")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.questionTitle}>
                {t("faq.how-do-i-sign-up.question")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.questionAnswer}>
                {t("faq.how-do-i-sign-up.answer")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.questionTitle}>
                {t("faq.can-i-use-on-mobile.question")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.questionAnswer}>
                {t("faq.can-i-use-on-mobile.answer")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.questionTitle}>
                {t("faq.how-do-i-add-transactions.question")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.questionAnswer}>
                {t("faq.how-do-i-add-transactions.answer")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.questionTitle}>
                {t("faq.how-do-i-categorize-transactions.question")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.questionAnswer}>
                {t("faq.how-do-i-categorize-transactions.answer")}
            </Typography>
            <Typography variant={TypographyVariants.HEADLINE_6} className={styles.questionTitle}>
                {t("faq.is-finny-secure.question")}
            </Typography>
            <Typography variant={TypographyVariants.TEXT} className={styles.questionAnswer}>
                {t("faq.is-finny-secure.answer")}
            </Typography>
        </Page>
    );
};
export default FAQ;
