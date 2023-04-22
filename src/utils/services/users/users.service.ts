import type { IUserPasswordRecoveryDto, IResetUserPasswordDto } from "@amatinya/mooaly-common-beta";
import { axiosClient } from "@/config";

import type { PasswordRecoveryResponseData, PasswordResetResponseData } from ".";

export class UsersService {
    static async passwordRecovery(dto: IUserPasswordRecoveryDto) {
        const { data } = await axiosClient.post<PasswordRecoveryResponseData>("/users/password/recovery", dto);
        return data;
    }
    static async resetPassword(dto: IResetUserPasswordDto) {
        const { data } = await axiosClient.post<PasswordResetResponseData>("/users/password/reset", dto);
        return data;
    }
}
