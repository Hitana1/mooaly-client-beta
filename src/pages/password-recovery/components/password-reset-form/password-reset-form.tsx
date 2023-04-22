import type { FC } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { Formik, Form } from "formik";

import type { PasswordResetFormProps } from "./password-reset-form.types";
import { UsersService } from "@/utils/services/users";
import { AppRoutes } from "@/utils/constants";
import { Button, ButtonSizes, ButtonVariants } from "@/components/button";
import { FormikInput, InputSizes } from "@/components/input";
import { Typography, TypographyVariants } from "@/components/typography";
import type { PasswordResetFormData } from "./password-reset-form.types";
import { AuthFormError } from "@/components/auth-form-error";

import styles from "./password-reset-form.module.scss";

const PasswordResetForm: FC<PasswordResetFormProps> = ({ email, onEmailReset }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const {
        mutate: resetPasswordRequest,
        isLoading,
        isError,
        error,
    } = useMutation(UsersService.resetPassword, {
        onSuccess() {
            navigate(AppRoutes.SIGN_IN);
        },
    });
    const passwordResetFormInitialValues: PasswordResetFormData = {
        newPassword: "",
        newPasswordConfirmation: "",
        resetCode: "",
    };
    const passwordResetFormValidationSchema = yup.object({
        newPassword: yup
            .string()
            .min(6, t("password-recovery.forms.password-reset.validation-errors.short-password") as string)
            .max(120, t("password-recovery.forms.password-reset.validation-errors.long-password") as string)
            .required(t("password-recovery.forms.password-reset.validation-errors.required-field") as string),
        newPasswordConfirmation: yup
            .string()
            .oneOf(
                [yup.ref("newPassword")],
                t("password-recovery.forms.password-reset.validation-errors.passwords-do-not-match") as string,
            )
            .required(t("password-recovery.forms.password-reset.validation-errors.required-field") as string),
        resetCode: yup
            .string()
            .required(t("password-recovery.forms.password-reset.validation-errors.required-field") as string),
    });
    // Handlers
    const onPasswordReset = ({ newPassword, resetCode }: PasswordResetFormData) => {
        resetPasswordRequest({ email, newPassword, resetCode });
    };
    // View
    return (
        <Formik
            initialValues={passwordResetFormInitialValues}
            validationSchema={passwordResetFormValidationSchema}
            validateOnMount={false}
            validateOnBlur={false}
            onSubmit={onPasswordReset}
        >
            <Form className={styles.PasswordResetForm}>
                <Typography className={styles.title} variant={TypographyVariants.HEADLINE_2}>
                    {t("password-recovery.forms.password-reset.title")}
                </Typography>
                <Typography className={styles.subtitle} variant={TypographyVariants.SUBTITLE}>
                    {t("password-recovery.forms.password-reset.subtitle")}
                </Typography>
                {isError ? <AuthFormError error={error} /> : null}
                <input autoComplete={"username"} hidden />
                <FormikInput
                    size={InputSizes.LARGE}
                    type={"password"}
                    name={"newPassword"}
                    autoComplete={"new-password"}
                    placeholder={t("password-recovery.forms.password-reset.new-password-input-placeholder") as string}
                />
                <FormikInput
                    size={InputSizes.LARGE}
                    type={"password"}
                    name={"newPasswordConfirmation"}
                    autoComplete={"new-password"}
                    placeholder={
                        t("password-recovery.forms.password-reset.confirm-new-password-input-placeholder") as string
                    }
                />
                <FormikInput
                    size={InputSizes.LARGE}
                    type={"text"}
                    name={"resetCode"}
                    placeholder={t("password-recovery.forms.password-reset.code-input-placeholder") as string}
                />
                <div className={styles.bottom}>
                    <Button
                        variant={ButtonVariants.SECONDARY}
                        size={ButtonSizes.LARGE}
                        type={"button"}
                        onClick={onEmailReset}
                        disabled={isLoading}
                    >
                        {t("password-recovery.forms.password-reset.back") as string}
                    </Button>
                    <Button size={ButtonSizes.LARGE} type={"submit"} disabled={isLoading}>
                        {t("password-recovery.forms.password-reset.submit") as string}
                    </Button>
                </div>
            </Form>
        </Formik>
    );
};
export default PasswordResetForm;
