import { User, UserNotificationSettings, UserSetting } from "../../../types";

export type UserFields = (keyof User)[];
export type UserNotificationSettingsFields = (keyof UserNotificationSettings)[];
export type UserSettingFields = (keyof UserSetting)[]

export const userQuery:UserFields = [
    "_id", "country", "createdAt", "dob", "email",
    "firstName", "isAdmin", "lastName", "phone",
    "phoneVerified", "phoneVerifiedAt", "profileImageUrl", 
    "updatedAt"
]
export const userNotificationSettingsQuery:UserNotificationSettingsFields = [
    "_id", "notificationChannels", "serviceUpdate", "userId"
]
export const userSettingQuery:UserSettingFields = [
    "_id", "defaultStoreId", "hasFa2", "hasTransactionPin",
    "subBillType", "subscriptionPlanID", "userId"
]