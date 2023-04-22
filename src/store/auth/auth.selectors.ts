import type { RootState } from "..";

export const selectAuthAccessToken = (store: RootState) => store.auth.accessToken;
