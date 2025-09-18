/**
 * service UserService {
    //implemented 
    rpc GetUser (GetUserRequest) returns (GetUserResponse);
    rpc CheckRegistration (CheckRegistrationRequest) returns (CheckRegistrationResponse);
    rpc Login (LoginRequest) returns (LoginResponse);
    rpc SignUp (SignUpRequest) returns (LoginResponse);
    rpc SendOTP (SendOTPRequest) returns (SendOTPResponse);
    rpc VerifyOTP (VerifyOTPRequest) returns (VerifyOTPResponse);
    rpc ResetPin (ResetPinRequest) returns (ResetPinResponse);

    // Users
    rpc GetUsers (GetUsersRequest) returns (GetUsersResponse);
    rpc UpdateUser (UpdateUserRequest) returns (UpdateUserResponse);

    //Transaction Pin 
    rpc UpdateTxPin (UpdateTxPinRequest) returns (UpdateTxPinResponse);

    //Notifications - TODO: REMOVE
    rpc UpdateUserNotificationSettings(UpdateUserNotificationSettingsRequest) returns (UpdateUserNotificationSettingsResponse);
    rpc GetUserNotificationSettings(GetUserNotificationSettingsRequest) returns (GetUserNotificationSettingsResponse);

    //User Settings
    rpc UpdateUserSetting(UpdateUserSettingRequest) returns (UpdateUserSettingResponse);
    rpc GetUserSetting(GetUserSettingRequest) returns (GetUserSettingResponse);
}
 */

import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import {authSchema} from "./schemas/auth.schema";
import { LoginRequest, LoginResponse } from "./types/user.type";

export const createAuthService = (client: GraphQLClient) => ({
    async login(
        input: LoginRequest, 
        fetchFields?: {
          root?: (keyof LoginResponse)[],
        },
        option?: RequestOption
      ): Promise<LoginResponse | null> {
        const res = await client.request<{ login: LoginResponse }, LoginRequest>(
          authSchema.login(
            gqlQueryStringBuilder<LoginResponse>(
              fetchFields?.root ?? ["accessToken", "userId"],
            )
          ), 
          input, 
          option
        );
        return res.data?.login ?? null;
      },
})