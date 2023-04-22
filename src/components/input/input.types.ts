import type { ComponentProps } from "react";

import { InputSizes } from "./input.constants";

export type InputProps = ComponentProps<"input"> & {
    size?: InputSizes;
    hasWarning?: boolean;
    hasError?: boolean;
};
export type FormikInputProps = {
    name: string;
} & Exclude<InputProps, "name">;
