import type { ComponentProps, FC } from "react";

import { ButtonSizes, ButtonVariants } from "./button.constants";
import type { IconProps } from "@/components/icons";

export type ButtonProps = ComponentProps<"button"> & {
    size?: ButtonSizes;
    variant?: ButtonVariants;
    isRounded?: boolean;
    leftIcon?: FC<IconProps>;
    icon?: FC<IconProps>;
    rightIcon?: FC<IconProps>;
};
