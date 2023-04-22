import type { RootState } from "@/store";

export const selectUiAppColorTheme = (state: RootState) => state.ui.appColorTheme;
