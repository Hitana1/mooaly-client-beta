import type { FC } from "react";
import { ErrorMessage, Field } from "formik";
import type { FieldProps } from "formik";

import type { FormikInputProps } from "../input.types";
import Input from "../input";
import { InputError } from "@/components/input/input-error";

import styles from "./formik-input.module.scss";

const FormikInput: FC<FormikInputProps> = ({ name, ...restProps }) => {
    return (
        <Field name={name}>
            {({ form: { errors, touched }, field }: FieldProps) => (
                <div className={styles.FormikInput}>
                    <Input hasError={name in errors && name in touched} {...restProps} {...field} />
                    <ErrorMessage name={name} component={InputError} />
                </div>
            )}
        </Field>
    );
};
export default FormikInput;
