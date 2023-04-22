import type { ISignUpDto, ISignInDto } from "@amatinya/mooaly-common-beta";

import type { SignInResponseData, SignUpResponseData, VerifyAccessTokenResponseData } from "./auth.types";
import { axiosClient } from "@/config";

export class AuthService {
    static async signIn(dto: ISignInDto) {
        const { data } = await axiosClient.post<SignInResponseData>("/auth/sign-in", dto);
        return data;
    }
    static async signUp(dto: ISignUpDto) {
        const { data } = await axiosClient.post<SignUpResponseData>("/auth/sign-up", dto);
        return data;
    }
    static async verifyAccessToken() {
        const { data } = await axiosClient.get<VerifyAccessTokenResponseData>("/auth/me");
        return data;
    }
}
