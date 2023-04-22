import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import type { ISignUpDto } from "@amatinya/mooaly-common-beta";
import * as yup from "yup";
import { Formik, Form } from "formik";

import type { PageProps } from "@/utils/types";
import { useDocumentTitle } from "@/utils/hooks";
import { AuthService } from "@/utils/services";
import { signIn } from "@/store/auth";
import { useAppDispatch } from "@/utils/hooks";
import { FormikInput, InputSizes } from "@/components/input";
import { Typography, TypographyVariants } from "@/components/typography";
import { Button, ButtonSizes } from "@/components/button";
import { Page } from "@/components/page";
import { AppRoutes } from "@/utils/constants";
import { AuthFormError } from "@/components/auth-form-error";

import styles from "./sign-up.module.scss";

const SignUp: FC<PageProps> = ({ title }) => {
    const { t } = useTranslation();
    useDocumentTitle(title ? t(title) : null);
    const dispatch = useAppDispatch();
    const {
        mutate: signUpRequest,
        isLoading,
        isError,
        error,
    } = useMutation(AuthService.signUp, {
        onSuccess({ accessToken }) {
            dispatch(signIn({ accessToken }));
        },
    });
    const signUpFormInitialValues: ISignUpDto = {
        name: "",
        email: "",
        password: "",
    };
    const signUpFormValidationSchema = yup.object({
        name: yup
            .string()
            .min(2, t("sign-up.form.validation-errors.short-name") as string)
            .max(120, t("sign-up.form.validation-errors.long-name") as string)
            .required(t("sign-up.form.validation-errors.required-field") as string),
        email: yup
            .string()
            .email(t("sign-up.form.validation-errors.invalid-email") as string)
            .required(t("sign-up.form.validation-errors.required-field") as string),
        password: yup
            .string()
            .min(6, t("sign-up.form.validation-errors.short-password") as string)
            .max(120, t("sign-up.form.validation-errors.long-password") as string)
            .required(t("sign-up.form.validation-errors.required-field") as string),
    });
    // Handlers
    const onSignUp = (data: ISignUpDto) => {
        signUpRequest(data);
    };
    // View
    return (
        <Page className={styles.SignUp}>
            <Formik
                initialValues={signUpFormInitialValues}
                validationSchema={signUpFormValidationSchema}
                validateOnMount={false}
                validateOnBlur={false}
                onSubmit={onSignUp}
            >
                <Form className={styles.form}>
                    <Typography className={styles.title} variant={TypographyVariants.HEADLINE_2}>
                        {t("sign-up.form.title")}
                    </Typography>
                    <Typography className={styles.subtitle} variant={TypographyVariants.SUBTITLE}>
                        {t("sign-up.form.subtitle")}
                    </Typography>
                    {isError ? <AuthFormError error={error} /> : null}
                    <FormikInput
                        type={"text"}
                        name={"name"}
                        size={InputSizes.LARGE}
                        placeholder={t("sign-up.form.name-input-placeholder") as string}
                        autoComplete={"name"}
                    />
                    <FormikInput
                        type={"text"}
                        name={"email"}
                        size={InputSizes.LARGE}
                        placeholder={t("sign-up.form.email-input-placeholder") as string}
                        autoComplete={"email"}
                    />
                    <FormikInput
                        type={"password"}
                        name={"password"}
                        size={InputSizes.LARGE}
                        placeholder={t("sign-up.form.password-input-placeholder") as string}
                        autoComplete={"current-password"}
                    />
                    <Button className={styles.signUpBtn} size={ButtonSizes.LARGE} type="submit" disabled={isLoading}>
                        {t("sign-up.form.submit")}
                    </Button>
                </Form>
            </Formik>
            <Typography className={styles.signIn} variant={TypographyVariants.TEXT}>
                {t("sign-up.form.sign-in.text")}&nbsp;
                <Link to={AppRoutes.SIGN_IN} className={styles.link}>
                    {t("sign-up.form.sign-in.link")}
                </Link>
            </Typography>
        </Page>
    );
};
export default SignUp;
