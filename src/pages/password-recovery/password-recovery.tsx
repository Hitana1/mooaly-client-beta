import type { FC } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import type { PageProps } from "@/utils/types";
import { useDocumentTitle } from "@/utils/hooks";
import { PasswordResetForm, PasswordRecoveryForm } from "./components";
import { Page } from "@/components/page";
import { Typography, TypographyVariants } from "@/components/typography";
import { AppRoutes } from "@/utils/constants";

import styles from "./password-recovery.module.scss";

const PasswordRecovery: FC<PageProps> = ({ title }) => {
    const { t } = useTranslation();
    useDocumentTitle(title ? t(title) : null);
    const [sentEmail, setSentEmail] = useState<string | null>(null);
    // Handlers
    const onPasswordRecoveryCodeSent = (email: typeof sentEmail) => {
        setSentEmail(email);
    };
    const onEmailReset = () => {
        setSentEmail(null);
    };
    // View
    return (
        <Page className={styles.PasswordRecovery}>
            {sentEmail === null ? (
                <PasswordRecoveryForm onPasswordRecoveryCodeSent={onPasswordRecoveryCodeSent} />
            ) : (
                <PasswordResetForm onEmailReset={onEmailReset} email={sentEmail} />
            )}
            <Typography className={styles.signUp} variant={TypographyVariants.TEXT}>
                {t("sign-in.form.sign-up.text")}&nbsp;
                <Link to={AppRoutes.SIGN_UP} className={styles.link}>
                    {t("sign-in.form.sign-up.link")}
                </Link>
            </Typography>
        </Page>
    );
};

export default PasswordRecovery;
