import { FC } from "react";
import { IconProps } from "@/components/icons";

const MenuFilled: FC<IconProps> = ({ width = 24, height = 24, ...restProps }) => {
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
                d="M16.286 2h3.266A2.46 2.46 0 0 1 22 4.47v3.294c0 1.363-1.096 2.47-2.448 2.47h-3.266a2.46 2.46 0 0 1-2.45-2.47V4.47A2.46 2.46 0 0 1 16.287 2zM4.449 2h3.265a2.46 2.46 0 0 1 2.45 2.47v3.294a2.46 2.46 0 0 1-2.45 2.47H4.45A2.46 2.46 0 0 1 2 7.764V4.47A2.46 2.46 0 0 1 4.449 2zm0 11.766h3.265a2.46 2.46 0 0 1 2.45 2.47v3.294A2.46 2.46 0 0 1 7.713 22H4.45A2.46 2.46 0 0 1 2 19.53v-3.293a2.46 2.46 0 0 1 2.449-2.471zm11.837 0h3.266c1.352 0 2.448 1.106 2.448 2.47v3.294A2.46 2.46 0 0 1 19.552 22h-3.266a2.46 2.46 0 0 1-2.45-2.47v-3.293a2.46 2.46 0 0 1 2.45-2.471z"
                fill="currentColor"
            />
        </svg>
    );
};
export default MenuFilled;
