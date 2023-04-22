import { CSSProperties } from "react";

import { TypographyVariants } from "./typography.constants";

export type TypographyProps = {
    variant: TypographyVariants;
    className?: string;
    style?: CSSProperties;
};
