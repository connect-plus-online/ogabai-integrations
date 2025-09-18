import { User, UserNotificationSettings, UserSetting } from "../../../types";

export type UserBluePrint = (keyof User)[];
export type UserNotificationSettingsBluePrint = (keyof UserNotificationSettings)[];
export type UserSettingBluePrint = (keyof UserSetting)[]

export const userQuery:UserBluePrint = [
    "_id", "country", "createdAt", "dob", "email",
    "firstName", "isAdmin", "lastName", "phone",
    "phoneVerified", "phoneVerifiedAt", "profileImageUrl", 
    "updatedAt"
]
export const userNotificationSettingsQuery:UserNotificationSettingsBluePrint = [
    "_id", "notificationChannels", "serviceUpdate", "userId"
]
export const userSettingQuery:UserSettingBluePrint = [
    "_id", "defaultStoreId", "hasFa2", "hasTransactionPin",
    "subBillType", "subscriptionPlanID", "userId"
]