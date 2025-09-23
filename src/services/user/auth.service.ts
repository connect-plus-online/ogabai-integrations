import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import {authSchema} from "./schemas/auth.schema";
import { 
  LoginRequest, loginResponse, LoginResponse, 
  ResetPinRequest, resetPinResponse, ResetPinResponse, 
  SendOTPRequest, sendOTPResponse, SendOTPResponse, 
  SignUpRequest, signUpResponse, SignUpResponse, 
  UpdateTxPinRequest, updateTxPinResponse, UpdateTxPinResponse, 
  VerifyOTPRequest, verifyOTPResponse, VerifyOTPResponse 
} from "./types/auth.type";

export const createAuthService = (client: GraphQLClient) => ({
  async updateTxPin(
    input: UpdateTxPinRequest, 
    fetchFields?: {
      root?: (keyof UpdateTxPinResponse)[],
    },
    option?: RequestOption
  ): Promise<UpdateTxPinResponse | null> {
    const res = await client.request<{ updateTxPin: UpdateTxPinResponse }, UpdateTxPinRequest>(
      authSchema.updateTxPin(
        gqlQueryStringBuilder<UpdateTxPinResponse>(
          fetchFields?.root ?? updateTxPinResponse,
        )
      ), 
      input, 
      option
    );
    return res.data?.updateTxPin ?? null;
  },
  async verifyOTP(
    input: VerifyOTPRequest, 
    fetchFields?: {
      root?: (keyof VerifyOTPResponse)[],
    },
    option?: RequestOption
  ): Promise<VerifyOTPResponse | null> {
    const res = await client.request<{ verifyOTP: VerifyOTPResponse }, VerifyOTPRequest>(
      authSchema.verifyOTP(
        gqlQueryStringBuilder<VerifyOTPResponse>(
          fetchFields?.root ?? verifyOTPResponse,
        )
      ), 
      input, 
      option
    );
    return res.data?.verifyOTP ?? null;
  },
  async sendOTP(
    input: SendOTPRequest, 
    fetchFields?: {
      root?: (keyof SendOTPResponse)[],
    },
    option?: RequestOption
  ): Promise<SendOTPResponse | null> {
    const res = await client.request<{ sendOTP: SendOTPResponse }, SendOTPRequest>(
      authSchema.sendOTP(
        gqlQueryStringBuilder<SendOTPResponse>(
          fetchFields?.root ?? sendOTPResponse,
        )
      ), 
      input, 
      option
    );
    return res.data?.sendOTP ?? null;
  },
  async resetPin(
    input: ResetPinRequest, 
    fetchFields?: {
      root?: (keyof ResetPinResponse)[],
    },
    option?: RequestOption
  ): Promise<ResetPinResponse | null> {
    const res = await client.request<{ resetPin: ResetPinResponse }, ResetPinRequest>(
      authSchema.resetPin(
        gqlQueryStringBuilder<ResetPinResponse>(
          fetchFields?.root ?? resetPinResponse,
        )
      ), 
      input, 
      option
    );
    return res.data?.resetPin ?? null;
  },
  async signUp(
    input: SignUpRequest, 
    fetchFields?: {
      root?: (keyof SignUpResponse)[],
    },
    option?: RequestOption
  ): Promise<SignUpResponse | null> {
    const res = await client.request<{ signUp: SignUpResponse }, SignUpRequest>(
      authSchema.signUp(
        gqlQueryStringBuilder<SignUpResponse>(
          fetchFields?.root ?? signUpResponse,
        )
      ), 
      input, 
      option
    );
    return res.data?.signUp ?? null;
  },
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
          fetchFields?.root ?? loginResponse,
        )
      ), 
      input, 
      option
    );
    return res.data?.login ?? null;
  },
})