import { FC } from "react";
import classNames from "classnames";
import { useState } from "react";

import type { InputProps } from "./input.types";
import { InputSizes } from "./input.constants";
import { Button, ButtonSizes, ButtonVariants } from "@/components/button";
import { Eye, EyeOff } from "../icons";

import styles from "./input.module.scss";

const Input: FC<InputProps> = ({
    type,
    size = InputSizes.MEDIUM,
    hasError = false,
    hasWarning = false,
    className,
    ...restProps
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // Handlers
    const onPasswordVisibilityChange = () => {
        setIsPasswordVisible(isPasswordVisible => !isPasswordVisible);
    };
    // View
    return (
        <div className={styles.wrapper}>
            <input
                type={isPasswordVisible ? "text" : type}
                className={classNames(
                    styles.Input,
                    className,
                    {
                        [styles.large]: size === InputSizes.LARGE,
                        [styles.medium]: size === InputSizes.MEDIUM,
                        [styles.small]: size === InputSizes.SMALL,
                    },
                    {
                        [styles.hasWarning]: hasWarning,
                        [styles.hasError]: hasError,
                    },
                    {
                        [styles.withPasswordBtn]: type === "password" || isPasswordVisible,
                    },
                )}
                {...restProps}
            />
            {type === "password" ? (
                <Button
                    type={"button"}
                    icon={isPasswordVisible ? Eye : EyeOff}
                    variant={ButtonVariants.GHOST}
                    size={ButtonSizes.SMALL}
                    onClick={onPasswordVisibilityChange}
                    className={styles.passwordVisibilityBtn}
                />
            ) : null}
        </div>
    );
};
export default Input;
