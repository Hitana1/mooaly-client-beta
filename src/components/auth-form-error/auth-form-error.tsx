import type { FC } from "react";
import { useLayoutEffect, useState } from "react";
import { isAxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { Typography, TypographyVariants } from "@/components/typography";
import type { AuthFormErrorProps } from "./auth-form-error.types";
import { uuid } from "@/utils/lib";

import styles from "./auth-form-error.module.scss";

const AuthFormError: FC<AuthFormErrorProps> = ({ error }) => {
    const [errorContent, setErrorContent] = useState<string | string[] | null>(null);
    const { t } = useTranslation();
    // Effects
    useLayoutEffect(() => {
        if (isAxiosError(error)) {
            setErrorContent(error.response?.data.message ?? error.message);
        } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setErrorContent(error?.message ?? null);
        }
    }, [error]);
    // View
    if (errorContent === null) {
        return null;
    }
    return (
        <div className={styles.AuthFormError}>
            <ul>
                {Array.isArray(errorContent) ? (
                    errorContent.map(msg => (
                        <li key={uuid()}>
                            <Typography variant={TypographyVariants.DESCRIPTION} className={styles.message}>
                                &bull; {t(msg)}
                            </Typography>
                        </li>
                    ))
                ) : (
                    <li key={uuid()}>
                        <Typography variant={TypographyVariants.DESCRIPTION} className={styles.message}>
                            &bull; {t(errorContent)}
                        </Typography>
                    </li>
                )}
            </ul>
        </div>
    );
};
export default AuthFormError;
