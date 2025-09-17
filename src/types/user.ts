// -------------------- Enums as Unions --------------------
export type UserStatus = "active" | "suspended" | "inactive";
export type UserType = "manufacturer" | "distributor" | "admin";

// -------------------- Core Entities --------------------
export interface Manufacturer {
  _id: string;
  userId: string;
  referralCode: string;
  userStatus: UserStatus;
  createdAt: string;
}

export interface Distributor {
  _id: string;
  userId: string;
  referralCode: string;
  userStatus: UserStatus;
  createdAt: string;
}

export interface Admin {
  _id: string;
  userId: string;
  userStatus: UserStatus;
  createdAt: string;
}

export interface User {
  _id: string;
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  phoneVerifiedAt: string;
  phoneVerified: string;   // could be boolean in practice
  country: string;
  profileImageUrl: string;
  dob: string;
  isAdmin: string;         // could be boolean in practice
  createdAt: string;
  updatedAt: string;
}

export interface UserDevice {
  _id: string;
  userId: string;
  identifier: string;
  createdAt: string;
  lastUsedAt: string;
}

// -------------------- Never Returned --------------------
export interface Auth {
  _id: string;
  userId: string;
  passwordHash: string;
  token: string;
  pinHash: string;
}

export interface OTP {
  _id: string;
  otp: string;
  code: string;
}

export interface UserSetting {
  _id: string;
  userId: string;
  defaultStoreId: string;
  hasFa2: string;              // could be boolean
  hasTransactionPin: string;   // could be boolean
  subscriptionPlanID: string;
  subBillType: string;
}

export interface TransactionPin {
  _id: string;
  userId: string;
  pin: string;
}

// -------------------- Notifications --------------------
export interface UserNotificationSettings {
  _id: string;
  userId: string;
  notificationChannels: NotificationChannels;
  serviceUpdate: ServiceUpdate;
}

export interface NotificationChannels {
  emailNotification: boolean;
  smsNotification: boolean;
  pushNotification: boolean;
}

export interface ServiceUpdate {
  debtorAlert: boolean;
  priceMovement: boolean;
  inventory: boolean;
  deliveryStatus: boolean;
  saleAlert: boolean;
}
