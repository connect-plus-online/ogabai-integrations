import { UserSetting } from "../../../types";
import { UserSettingFields, userSettingQuery } from "../entities/user.entity";

export interface GetUserSettingRequest {
    userId: string;
}
export interface GetUserSettingResponse {
    userSetting: UserSetting;
}
export interface GetUserSettingResponseNestedFields {
    userSetting: UserSettingFields;
}
export const getUserSettingResponse: (keyof GetUserSettingResponse)[] = [
    "userSetting"
]
export const getUserSettingResponseNestedFields: GetUserSettingResponseNestedFields = {
    userSetting: userSettingQuery
}


// update user setting
export interface UpdateUserSettingRequest {
    userId: string;
    userSetting: UserSetting;
}
export interface UpdateUserSettingResponse {
    userSetting: UserSetting;
}
export type UpdateUserSettingResponseFields = GetUserSettingResponseNestedFields
export const updateUserSettingResponse = getUserSettingResponse;
export const updateUserSettingResponseNestedFields = getUserSettingResponseNestedFields;

