import type { FC } from "react";

import type { IconProps } from "@/components/icons";

const CircleOutlined: FC<IconProps> = ({ width = 24, height = 24, ...restProps }) => {
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
                d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CircleOutlined;
