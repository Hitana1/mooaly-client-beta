import { createSlice } from "@reduxjs/toolkit";

import type { AuthState } from "./auth.types";
import { signIn, signOut } from "@/store/auth/auth.middlewares";

const initialState: AuthState = {
    accessToken: null,
};
const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.accessToken = action.payload.accessToken;
        });
        builder.addCase(signOut.fulfilled, state => {
            state.accessToken = null;
        });
    },
});
export const { reducer } = slice;
