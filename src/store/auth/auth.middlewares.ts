import { createAsyncThunk } from "@reduxjs/toolkit";

import { LocalStorage } from "@/utils/lib";
import { axiosClient } from "@/config";
import type { SignInResponseData } from "@/utils/services";

export const signOut = createAsyncThunk("auth/exit", () => {
    LocalStorage.removeAccessToken();
    delete axiosClient.defaults.headers.common["Authorization"];
});
export const signIn = createAsyncThunk<SignInResponseData, SignInResponseData>("auth/auth", ({ accessToken }) => {
    LocalStorage.setAccessToken(accessToken);
    axiosClient.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    return { accessToken };
});
