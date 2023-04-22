import type { FC } from "react";
import classNames from "classnames";

import type { ButtonProps } from "./button.types";
import { ButtonSizes, ButtonVariants } from "./button.constants";
import { Typography, TypographyVariants } from "@/components/typography";

import styles from "./button.module.scss";

const Button: FC<ButtonProps> = ({
    size = ButtonSizes.MEDIUM,
    variant = ButtonVariants.PRIMARY,
    isRounded = false,
    className,
    children,
    leftIcon: LeftIcon,
    icon: Icon,
    rightIcon: RightIcon,
    ...restProps
}) => {
    const iconSize = size === ButtonSizes.LARGE || size === ButtonSizes.MEDIUM ? 20 : 18;
    const typographyVariant =
        size === ButtonSizes.MEDIUM || size === ButtonSizes.LARGE
            ? TypographyVariants.BUTTON_LABEL
            : TypographyVariants.MINI_BUTTON_LABEL;
    // View
    return (
        <button
            className={classNames(
                styles.Button,
                className,
                {
                    [styles.small]: size === ButtonSizes.SMALL,
                    [styles.medium]: size === ButtonSizes.MEDIUM,
                    [styles.large]: size === ButtonSizes.LARGE,
                },
                {
                    [styles.primary]: variant === ButtonVariants.PRIMARY,
                    [styles.secondary]: variant === ButtonVariants.SECONDARY,
                    [styles.outlined]: variant === ButtonVariants.OUTLINED,
                    [styles.ghost]: variant === ButtonVariants.GHOST,
                },
                {
                    [styles.rounded]: isRounded,
                    [styles.withIconOnly]: Icon !== undefined,
                },
            )}
            {...restProps}
        >
            {Icon === undefined && LeftIcon !== undefined ? <LeftIcon width={iconSize} height={iconSize} /> : null}
            {Icon === undefined ? (
                <Typography variant={typographyVariant}>{children}</Typography>
            ) : (
                <Icon width={iconSize} height={iconSize} />
            )}
            {Icon === undefined && RightIcon !== undefined ? <RightIcon width={iconSize} height={iconSize} /> : null}
        </button>
    );
};
export default Button;
