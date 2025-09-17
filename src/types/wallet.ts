// -------------------- Enums --------------------
export type AccountStatus = "active" | "inactive";

export type WalletStatus = "active" | "inactive" | "locked";

export type WalletCurrency = "ngn";

// -------------------- Interfaces --------------------
export interface Account {
  _id: string;
  userId: string;
  accountStatus: AccountStatus;
  bvn: string;
  nin: string;
  createdAt: string;
  totalBalance: number;
  wallets: Wallet[];
}

export interface Bank {
  _id: string;
  name: string;
  accName: string;
  accNo: string;
  createdAt: string;
}

export interface Wallet {
  _id: string;
  accountId: string;
  storeId: string;
  currency: WalletCurrency;
  balance: number;
  status: WalletStatus;
  createdAt: string;
}

export interface VirtualAccount {
  _id: string;
  userId: string;
  currency: string;
  accountNumber: string;
  accountName: string;
  bankName: string;
  bankCode: string;
  providerAccountId: string;
  status: string;
  storeId: string;
}
