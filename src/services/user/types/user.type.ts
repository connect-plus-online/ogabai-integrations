import { 
    User,
    UserNotificationSettings, 
    UserSetting, 
    UserType 
} from "../../../types";
import { UserFields, UserSettingFields } from "../entities/user.entity";

export interface UpdateTxPinRequest {
    userId: string;
    pin: string;
    oldPin: string;
}
export interface UpdateTxPinResponse {
    success: boolean;
}

export interface UpdateUserSettingRequest {
    userId: string;
    userSetting: UserSetting;
}
export interface UpdateUserSettingResponse {
    userSetting: UserSetting;
}
export type UpdateUserSettingResponseFields = GetUserSettingResponseFields
export interface GetUserSettingRequest {
    userId: string;
}
export interface GetUserSettingResponse {
    userSetting: UserSetting;
}
export interface GetUserSettingResponseFields {
    userSetting: UserSettingFields;
}
export interface ResetPinRequest {
    phone: string;
    pin: string;
}
export interface ResetPinResponse {
    success: boolean;
}
export interface CheckRegistrationRequest {
    phone: string;
}
export interface CheckRegistrationResponse {
    isRegistered: boolean;
}
export interface GetUsersRequest {
    userIds?: string[];
    user?: User;
    limit: number;
    skip: number;
}
export interface GetUsersResponse {
    users: User[];
}
export type GetUsersResponseFields = GetUserResponseFields;
export interface GetUserRequest {
    userId: string;
}
export interface GetUserResponse {
    user: User;
}
export interface GetUserResponseFields {
    user: UserFields;
}
export interface AddUserRequest {
    user: User;
    userType: UserType;
}
export interface AddUserResponse {
    user: User;
}
export interface SendOTPRequest {
    phone: string;
}
export interface SendOTPResponse {
    successful: boolean;
    otp: string;
}
export interface VerifyOTPRequest {
    phone: string;
    otp: string;
}
export interface VerifyOTPResponse {
    otpVerifiedAccessToken: string;
}
export interface UpdateUserRequest {
    userId: string;
    user: User;
}
export interface UpdateUserResponse {
    user: User;
    uploadImageResponse: UploadUserImageResponse
}
export interface UpdateUserResponseFields extends GetUserResponseFields {
    uploadImageResponse: (keyof UploadUserImageResponse)[]
}
export interface UploadUserImageResponse {
    url: string;
    fileUrl: string;
}
export interface LoginRequest {
    pin: string;
    phone: string;
    userType?: UserType;
}
export interface LoginResponse {
    accessToken: string;
    userId: string;
}
export interface SignUpRequest {
    phone: string;
    pin: string;
    storeName: string;
    userType: UserType;
}
export interface SignUpResponse {
    accessToken: string;
    userId: string;
}
export interface GetUserNotificationSettingsRequest {
    userId: string;
}
export interface GetUserNotificationSettingsResponse {
    userNotificationSettings: UserNotificationSettings;
}
export interface GetUserNotificationSettingsResponseFields {
    userNotificationSettings: (keyof UserNotificationSettings)[]
}
export interface UpdateUserNotificationSettingsRequest {
    userNotificationSettings: UserNotificationSettings;
    userId: string;
}
export interface UpdateUserNotificationSettingsResponse {
    userNotificationSettings: UserNotificationSettings;
}
export type UpdateUserNotificationSettingsResponseFields = GetUserNotificationSettingsResponseFields;