import type { FC } from "react";

import type { IconProps } from "@/components/icons";

const CaretRightOutlined: FC<IconProps> = ({ width = 24, height = 24, ...restProps }) => {
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
                d="M11.073 18.839c-.808.707-2.073.133-2.073-.94V6.101c0-1.074 1.265-1.648 2.073-.94l6.31 5.521a1.75 1.75 0 0 1 0 2.634l-6.31 5.522Zm-.573-1.492 5.896-5.159a.25.25 0 0 0 0-.376L10.5 6.653v10.694Z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CaretRightOutlined;
