import type { FC } from "react";

import type { IconProps } from "@/components/icons";

const CaretUpFilled: FC<IconProps> = ({ width = 24, height = 24, ...restProps }) => {
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
                d="M6.102 16.981c-1.074 0-1.648-1.265-.94-2.073l5.521-6.31a1.75 1.75 0 0 1 2.634 0l5.522 6.31c.707.809.133 2.073-.94 2.073H6.101Z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CaretUpFilled;
