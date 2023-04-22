import type { FC, ComponentProps } from "react";
import classNames from "classnames";

import styles from "./item.module.scss";

const Item: FC<ComponentProps<"div">> = ({ className, ...restProps }) => {
    return <div className={classNames(styles.Item, className)} {...restProps} />;
};
export default Item;
