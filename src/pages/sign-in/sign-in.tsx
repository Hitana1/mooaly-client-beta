import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import type { ISignInDto } from "@amatinya/mooaly-common-beta";
import * as yup from "yup";
import { Formik, Form } from "formik";

import type { PageProps } from "@/utils/types";
import { useAppDispatch, useDocumentTitle } from "@/utils/hooks";
import { signIn } from "@/store/auth";
import { AuthService } from "@/utils/services";
import { Button, ButtonSizes } from "@/components/button";
import { FormikInput, InputSizes } from "@/components/input";
import { Page } from "@/components/page";
import { Typography, TypographyVariants } from "@/components/typography";
import { AppRoutes } from "@/utils/constants";
import { AuthFormError } from "@/components/auth-form-error";

import styles from "./sign-in.module.scss";

const SignIn: FC<PageProps> = ({ title }) => {
    const { t } = useTranslation();
    useDocumentTitle(title ? t(title) : null);
    const dispatch = useAppDispatch();
    const {
        mutate: signInRequest,
        isLoading,
        isError,
        error,
    } = useMutation(AuthService.signIn, {
        onSuccess({ accessToken }) {
            dispatch(signIn({ accessToken }));
        },
    });
    const signInFormInitialValues: ISignInDto = {
        email: "",
        password: "",
    };
    const signInFormValidationSchema = yup.object({
        email: yup
            .string()
            .email(t("sign-in.form.validation-errors.invalid-email") as string)
            .required(t("sign-in.form.validation-errors.required-field") as string),
        password: yup
            .string()
            .min(6, t("sign-in.form.validation-errors.short-password") as string)
            .max(120, t("sign-in.form.validation-errors.long-password") as string)
            .required(t("sign-in.form.validation-errors.required-field") as string),
    });
    // Handlers
    const onSignIn = (data: ISignInDto) => {
        signInRequest(data);
    };
    // View
    return (
        <Page className={styles.SignIn}>
            <Formik
                initialValues={signInFormInitialValues}
                validationSchema={signInFormValidationSchema}
                validateOnMount={false}
                validateOnBlur={false}
                onSubmit={onSignIn}
            >
                <Form className={styles.form}>
                    <Typography className={styles.title} variant={TypographyVariants.HEADLINE_2}>
                        {t("sign-in.form.title")}
                    </Typography>
                    <Typography className={styles.subtitle} variant={TypographyVariants.SUBTITLE}>
                        {t("sign-in.form.subtitle")}
                    </Typography>
                    {isError ? <AuthFormError error={error} /> : null}
                    <FormikInput
                        type={"text"}
                        name={"email"}
                        size={InputSizes.LARGE}
                        placeholder={t("sign-in.form.email-input-placeholder") as string}
                        autoComplete={"email"}
                    />
                    <FormikInput
                        type={"password"}
                        name={"password"}
                        size={InputSizes.LARGE}
                        placeholder={t("sign-in.form.password-input-placeholder") as string}
                        autoComplete={"current-password"}
                    />
                    <Typography className={styles.forgotPassword} variant={TypographyVariants.TEXT}>
                        <Link className={styles.link} to={AppRoutes.PASSWORD_RECOVERY}>
                            {t("sign-in.form.forgot-password")}
                        </Link>
                    </Typography>
                    <Button type={"submit"} size={ButtonSizes.LARGE} disabled={isLoading}>
                        {t("sign-in.form.submit")}
                    </Button>
                </Form>
            </Formik>
            <Typography className={styles.signUp} variant={TypographyVariants.TEXT}>
                {t("sign-in.form.sign-up.text")}&nbsp;
                <Link to={AppRoutes.SIGN_UP} className={styles.link}>
                    {t("sign-in.form.sign-up.link")}
                </Link>
            </Typography>
        </Page>
    );
};
export default SignIn;
