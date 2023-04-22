import type { FC } from "react";

import type { IconProps } from "@/components/icons";

const CaretUpOutlined: FC<IconProps> = ({ width = 24, height = 24, ...restProps }) => {
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
                d="M5.161 14.908c-.707.809-.133 2.073.941 2.073h11.796c1.074 0 1.648-1.265.941-2.073l-5.522-6.31a1.75 1.75 0 0 0-2.634 0l-5.522 6.31Zm1.492.573 5.159-5.896a.25.25 0 0 1 .376 0l5.16 5.896H6.652Z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CaretUpOutlined;
