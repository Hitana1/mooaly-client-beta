import type { FC, ComponentProps } from "react";
import classNames from "classnames";

import { Item } from "./components";

import styles from "./dropdown-menu.module.scss";

// eslint-disable-next-line
const DropdownMenu: FC<ComponentProps<"div">> & { Item: typeof Item } = ({ className, ...restProps }) => {
    return <div className={classNames(styles.DropdownMenu, className)} {...restProps} />;
};
DropdownMenu.Item = Item;
export default DropdownMenu;
