import axios from "axios";

import { LocalStorage } from "@/utils/lib";

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});
const accessToken = LocalStorage.getAccessToken();
if (accessToken) {
    axiosClient.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}
