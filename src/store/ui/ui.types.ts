import { AppColorThemes } from "./ui.constants";

// State
export type UiState = {
    appColorTheme: AppColorThemes;
};
// Payloads
export type SetAppColorThemePayload = {
    newAppColorTheme: AppColorThemes;
};
