import type { FC, ComponentProps } from "react";
import classNames from "classnames";

import styles from "./page.module.scss";

const Page: FC<ComponentProps<"main">> = ({ className, ...restProps }) => {
    return <main className={classNames(styles.Page, className)} {...restProps} />;
};
export default Page;
