import type { FC } from "react";

import type { IconProps } from "@/components/icons";

const CloseFilled: FC<IconProps> = ({ width = 24, height = 24, ...restProps }) => {
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
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CloseFilled;
