import type { FC } from "react";

import type { IconProps } from "./icons.types";

const ArrowUpRight: FC<IconProps> = ({ width = 24, height = 24, ...restProps }) => {
    return (
        <svg
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                d="m12.497 3.002 7.555.001.121.014.088.02.104.034.09.04.063.036.063.042.064.05.063.058.094.11.072.11.053.114.035.105.016.065.01.053.01.148v7.504a1 1 0 0 1-1.993.117l-.007-.117v-5.09L4.706 20.708a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.095L17.583 5.002h-5.086a1 1 0 0 1-.993-.883l-.007-.117a1 1 0 0 1 1-1Z"
                fill="currentColor"
            />
        </svg>
    );
};
export default ArrowUpRight;
