import type { FC } from "react";

import type { IconProps } from "@/components/icons";

const CaretRightFilled: FC<IconProps> = ({ width = 24, height = 24, ...restProps }) => {
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
                d="M9 17.898c0 1.074 1.265 1.648 2.073.941l6.31-5.522a1.75 1.75 0 0 0 0-2.634l-6.31-5.522C10.265 4.454 9 5.028 9 6.102v11.796Z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CaretRightFilled;
