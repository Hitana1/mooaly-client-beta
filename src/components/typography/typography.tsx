import { createElement, PropsWithChildren } from "react";
import type { FC } from "react";
import classNames from "classnames";

import type { TypographyProps } from "./typography.types";
import { typographyElements, TypographyVariants } from "./typography.constants";

import styles from "./typography.module.scss";

const Typography: FC<PropsWithChildren<TypographyProps>> = ({ variant, className, style, children }) => {
    return createElement(
        typographyElements[variant],
        {
            className: classNames(
                styles.Typography,
                {
                    [styles.headline_1]: variant === TypographyVariants.HEADLINE_1,
                    [styles.headline_2]: variant === TypographyVariants.HEADLINE_2,
                    [styles.headline_3]: variant === TypographyVariants.HEADLINE_3,
                    [styles.headline_4]: variant === TypographyVariants.HEADLINE_4,
                    [styles.headline_5]: variant === TypographyVariants.HEADLINE_5,
                    [styles.headline_6]: variant === TypographyVariants.HEADLINE_6,
                    [styles.headline_7]: variant === TypographyVariants.HEADLINE_7,
                    [styles.text]: variant === TypographyVariants.TEXT,
                    [styles.text_bold]: variant === TypographyVariants.TEXT_BOLD,
                    [styles.subtitle]: variant === TypographyVariants.SUBTITLE,
                    [styles.subtitle_semi_bold]: variant === TypographyVariants.SUBTITLE_SEMI_BOLD,
                    [styles.button_label]: variant === TypographyVariants.BUTTON_LABEL,
                    [styles.mini_button_label]: variant === TypographyVariants.MINI_BUTTON_LABEL,
                    [styles.description]: variant === TypographyVariants.DESCRIPTION,
                    [styles.mini_description]: variant === TypographyVariants.MINI_DESCRIPTION,
                },
                className,
            ),
            style,
        },
        children,
    );
};
export default Typography;
