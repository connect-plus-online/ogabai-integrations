import { 
    User,
    UserNotificationSettings, 
    UserType 
} from "../../../types";
import { NotificationChannelsFields, notificationChannelsQuery, ServiceUpdateFields, serviceUpdateQuery, UserFields, UserNotificationSettingsFields, userNotificationSettingsQuery, userQuery } from "../user.entity";


// get user 
export interface GetUserRequest {
    userId: string;
}
export interface GetUserResponse {
    user: User;
}
export interface GetUserResponseNestedFields {
    user: UserFields;
}
export const getUserResponse: (keyof GetUserResponse)[] = [
    "user"
]
export const _getUserResponseNestedFields: Omit<GetUserResponseNestedFields, "user"> = {}
export const getUserResponseNestedFields: GetUserResponseNestedFields = {
    user: userQuery,
    ..._getUserResponseNestedFields,
}


// get users
export interface GetUsersRequest {
    userIds?: string[];
    user?: User;
    limit: number;
    skip: number;
}
export interface GetUsersResponse {
    users: User[];
}
export interface GetUsersResponseNestedFields extends Omit<GetUserResponseNestedFields, "user"> {
    users: UserFields
}
export const getUsersResponse: (keyof GetUsersResponse)[] = [
    "users"
];
export const getUsersResponseNestedFields: GetUsersResponseNestedFields = {
    users: userQuery,
    ..._getUserResponseNestedFields,
}


// add user 
export interface AddUserRequest {
    user: User;
    userType: UserType;
}
export interface AddUserResponse {
    user: User;
}
export type AddUserResponseNestedFields = GetUserResponseNestedFields;
export const addUserResponse = getUserResponse;
export const addUserResponseNestedFields = getUserResponseNestedFields;

// update user 
export interface UpdateUserRequest {
    userId: string;
    user: User;
}
export interface UploadUserImageResponse {
    url: string;
    fileUrl: string;
}
export interface UpdateUserResponse {
    user: User;
    uploadImageResponse: UploadUserImageResponse
}
export interface UpdateUserResponseNestedFields extends GetUserResponseNestedFields {
    uploadImageResponse: (keyof UploadUserImageResponse)[]
}
export const updateUserResponse = {
    ...getUserResponse,
    "uploadImageResponse": ["fileUrl", "url"]
}
export const updateUserResponseNestedFields: UpdateUserResponseNestedFields = {
    ...getUserResponseNestedFields,
    uploadImageResponse: ["fileUrl", "url"]
}