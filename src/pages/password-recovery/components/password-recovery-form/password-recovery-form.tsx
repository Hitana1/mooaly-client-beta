import type { FC } from "react";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { IUserPasswordRecoveryDto } from "@amatinya/mooaly-common-beta";

import type { PasswordRecoveryFormProps } from "./password-recovery-form.types";
import { UsersService } from "@/utils/services/users";
import { Button, ButtonSizes, ButtonVariants } from "@/components/button";
import { FormikInput, InputSizes } from "@/components/input";
import { Typography, TypographyVariants } from "@/components/typography";
import { AppRoutes } from "@/utils/constants";
import { AuthFormError } from "@/components/auth-form-error";

import styles from "./password-recovery-form.module.scss";

const PasswordRecoveryForm: FC<PasswordRecoveryFormProps> = ({ onPasswordRecoveryCodeSent }) => {
    const { t } = useTranslation();
    const {
        mutate: passwordRecoveryRequest,
        isLoading,
        isError,
        error,
    } = useMutation(UsersService.passwordRecovery, {
        onSuccess(_, { email }) {
            onPasswordRecoveryCodeSent(email);
        },
    });
    const navigate = useNavigate();
    const passwordRecoveryFormInitialValues: IUserPasswordRecoveryDto = {
        email: "",
    };
    const passwordRecoveryFormValidationSchema = yup.object({
        email: yup
            .string()
            .email(t("password-recovery.forms.password-recovery.validation-errors.invalid-email") as string)
            .required(t("password-recovery.forms.password-recovery.validation-errors.required-field") as string),
    });
    // Handlers
    const onPasswordRecoveryCancel = () => {
        navigate(AppRoutes.SIGN_IN);
    };
    const onCodeSend = (data: IUserPasswordRecoveryDto) => {
        passwordRecoveryRequest(data);
    };
    // View
    return (
        <Formik
            initialValues={passwordRecoveryFormInitialValues}
            validationSchema={passwordRecoveryFormValidationSchema}
            validateOnMount={false}
            validateOnBlur={false}
            onSubmit={onCodeSend}
        >
            <Form className={styles.PasswordRecoveryForm}>
                <Typography className={styles.title} variant={TypographyVariants.HEADLINE_2}>
                    {t("password-recovery.forms.password-recovery.title")}
                </Typography>
                {isError ? <AuthFormError error={error} /> : null}
                <FormikInput
                    size={InputSizes.LARGE}
                    type={"text"}
                    name={"email"}
                    placeholder={t("password-recovery.forms.password-recovery.email-input-placeholder") as string}
                />
                <div className={styles.bottom}>
                    <Button
                        onClick={onPasswordRecoveryCancel}
                        variant={ButtonVariants.SECONDARY}
                        size={ButtonSizes.LARGE}
                        type={"button"}
                        disabled={isLoading}
                    >
                        {t("password-recovery.forms.password-recovery.cancel")}
                    </Button>
                    <Button size={ButtonSizes.LARGE} type={"submit"} disabled={isLoading}>
                        {t("password-recovery.forms.password-recovery.submit")}
                    </Button>
                </div>
            </Form>
        </Formik>
    );
};
export default PasswordRecoveryForm;
