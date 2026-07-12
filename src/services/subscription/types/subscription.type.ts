import { Subscription, SubscriptionPlanFeatureBehaviour } from "../../../types";
import { subscriptionAccessValueQuery, SubscriptionFields, subscriptionLimitValueQuery, subscriptionQuery, subscriptionPlanFeatureBehaviourQuery, SubscriptionPlanFeatureBehaviourFields, SubscriptionLimitValueFields, SubscriptionAccessValueFields } from "../subscription.entity";

export interface GetSubscriptionRequest {
    subscription: Partial<Subscription>;
}
export interface GetSubscriptionResponse {
    subscription: Subscription
}
export const getSubscriptionResponse: (keyof GetSubscriptionResponse)[] = [
    "subscription"
]
export interface GetSubscriptionResponseNestedFields {
    subscription: SubscriptionFields
    subscriptionBehaviours: SubscriptionPlanFeatureBehaviourFields;
    subscriptionLimits: SubscriptionLimitValueFields;
    SubscriptionAccesses: SubscriptionAccessValueFields;

}
export const _getSubscriptionResponseNestedFields: 
Omit<GetSubscriptionResponseNestedFields, "subscription"> = {
    subscriptionBehaviours: subscriptionPlanFeatureBehaviourQuery,
    subscriptionLimits: subscriptionLimitValueQuery,
    SubscriptionAccesses: subscriptionAccessValueQuery
    
}
export const getSubscriptionResponseNestedFields: GetSubscriptionResponseNestedFields = {
    ..._getSubscriptionResponseNestedFields,
    subscription: subscriptionQuery
}

// get subscription by storeId
export interface GetActiveSubscriptionByStoreIDRequest {
    storeId: string
}
export type GetActiveSubscriptionByStoreIDResponse = GetSubscriptionResponse
export const getActiveSubscriptionByStoreIDResponse: (keyof GetActiveSubscriptionByStoreIDResponse)[] = getSubscriptionResponse
export type GetActiveSubscriptionByStoreIDResponseNestedFields = GetSubscriptionResponseNestedFields
export const getActiveSubscriptionByStoreIDResponseNestedFields: GetActiveSubscriptionByStoreIDResponseNestedFields = getSubscriptionResponseNestedFields

// gets
export interface GetSubscriptionsRequest {
    subscription?: Partial<Subscription>;
    subscriptionIds?: string[];
    search?: string;
    limit: number;
    skip: number;
}
export interface GetSubscriptionsResponse {
    subscriptions: Subscription[]
    total: number
}
export const getSubscriptionsResponse: (keyof GetSubscriptionsResponse)[] = [
    "subscriptions",
    "total"
]
export interface GetSubscriptionsResponseNestedFields extends 
Omit<GetSubscriptionResponseNestedFields, "subscription"> {
    subscriptions: SubscriptionFields
}
export const getSubscriptionsResponseNestedFields: GetSubscriptionsResponseNestedFields = {
    ..._getSubscriptionResponseNestedFields,
    subscriptions: subscriptionQuery
}

// create 
export interface AddSubscriptionRequest {
    subscription: Partial<Subscription>;
}
export interface AddSubscriptionResponse {
    subscription: Subscription
}
export const addSubscriptionResponse: (keyof AddSubscriptionResponse)[] = getSubscriptionResponse;
export type AddSubscriptionResponseNestedFields = GetSubscriptionResponseNestedFields;
export const addSubscriptionResponseNestedFields: AddSubscriptionResponseNestedFields = getSubscriptionResponseNestedFields;

// update
export interface UpdateSubscriptionRequest {
    subscriptionId: string;
    subscription: Partial<Subscription>;
}
export type  UpdateSubscriptionResponse = GetSubscriptionResponse;
export const updateSubscriptionResponse: (keyof UpdateSubscriptionResponse)[] = getSubscriptionResponse;
export type UpdateSubscriptionResponseNestedFields = GetSubscriptionResponseNestedFields;
export const updateSubscriptionResponseNestedFields: UpdateSubscriptionResponseNestedFields = getSubscriptionResponseNestedFields;

// remove 
export interface RemoveSubscriptionRequest {
    subscriptionId: string;
}
export interface RemoveSubscriptionResponse {
    subscriptionId: string;
}
export const removeSubscriptionResponse: (keyof RemoveSubscriptionResponse)[] = [
    "subscriptionId"
];
