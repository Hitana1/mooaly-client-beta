import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { UiState, SetAppColorThemePayload } from "./ui.types";
import { AppColorThemes } from "@/store/ui/ui.constants";

const initialState: UiState = {
    appColorTheme: AppColorThemes.LIGHT,
};
const slice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setAppColorTheme(state, action: PayloadAction<SetAppColorThemePayload>) {
            state.appColorTheme = action.payload.newAppColorTheme;
        },
    },
});
export const {
    reducer,
    actions: { setAppColorTheme },
} = slice;
