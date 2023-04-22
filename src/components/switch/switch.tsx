import type { FC } from "react";
import ReactSwitch, { ReactSwitchProps } from "react-switch";
import { useSelector } from "react-redux";

import { CircleFilled } from "@/components/icons";
import { AppColorThemes, selectUiAppColorTheme } from "@/store/ui";

import colors from "@/assets/scss/colors.module.scss";

const Switch: FC<ReactSwitchProps> = props => {
    const appColorTheme = useSelector(selectUiAppColorTheme);
    const onColor =
        appColorTheme === AppColorThemes.LIGHT ? colors.clrLightThemePrimaryBtnBg : colors.clrDarkThemePrimaryBtnBg;
    // View
    return (
        <ReactSwitch
            borderRadius={100}
            height={24}
            width={40}
            handleDiameter={16}
            onColor={onColor}
            offColor={appColorTheme === AppColorThemes.LIGHT ? colors.lightThemeGray3 : colors.darkThemeGray7}
            checkedIcon={<></>}
            uncheckedIcon={<></>}
            checkedHandleIcon={<CircleFilled color={onColor} width={10} height={10} style={{ marginLeft: 3 }} />}
            {...props}
        />
    );
};
export default Switch;
