import type { FC, PropsWithChildren } from "react";

import { Typography, TypographyVariants } from "@/components/typography";

import styles from "./input-error.module.scss";

const InputError: FC<PropsWithChildren> = props => {
    return <Typography variant={TypographyVariants.MINI_BUTTON_LABEL} className={styles.InputError} {...props} />;
};
export default InputError;
