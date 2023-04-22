import { IResetUserPasswordDto } from "@amatinya/mooaly-common-beta";

export type PasswordResetFormProps = {
    email: string;
    onEmailReset(): void;
};
export type PasswordResetFormData = Omit<IResetUserPasswordDto, "email"> & {
    newPasswordConfirmation: string;
};
