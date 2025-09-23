import { UserNotificationSettings } from "../../../types";
import { NotificationChannelsFields, notificationChannelsQuery, ServiceUpdateFields, serviceUpdateQuery, UserNotificationSettingsFields, userNotificationSettingsQuery } from "../user.entity";

// get user notification settings
export interface GetUserNotificationSettingsRequest {
    userId: string;
}
export interface GetUserNotificationSettingsResponse {
    userNotificationSettings: UserNotificationSettings;
}
export interface GetUserNotificationSettingsResponseNestedFields {
    userNotificationSettings: UserNotificationSettingsFields;
    notificationChannels: NotificationChannelsFields;
    serviceUpdate: ServiceUpdateFields
}
export const getUserNotificationSettingsResponse: (keyof GetUserNotificationSettingsResponse)[] = [
    "userNotificationSettings"
]
export const getUserNotificationSettingsResponseNestedFields: GetUserNotificationSettingsResponseNestedFields = {
    userNotificationSettings: userNotificationSettingsQuery,
    notificationChannels: notificationChannelsQuery,
    serviceUpdate: serviceUpdateQuery,
}

export interface UpdateUserNotificationSettingsRequest {
    userNotificationSettings: UserNotificationSettings;
    userId: string;
}
export interface UpdateUserNotificationSettingsResponse {
    userNotificationSettings: UserNotificationSettings;
}
export type UpdateUserNotificationSettingsResponseNestedFields = GetUserNotificationSettingsResponseNestedFields;
export const updateUserNotificationSettingsResponse = getUserNotificationSettingsResponse;;
export const updateUserNotificationSettingsResponseNestedFields = getUserNotificationSettingsResponseNestedFields;