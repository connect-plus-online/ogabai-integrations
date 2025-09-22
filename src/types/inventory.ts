export type CategoryStatus = "active" | "inactive";
export interface ProductAttribute {
  name: string;
  value: string;
}

export interface ProductCategory {
  _id: string;
  name: string;
  description: string;
  categoryStatus: CategoryStatus; // "active" | "inactive"
  storeId: string;
  createdAt: string;
  status: string;
  isTemplate: string; // not stored
}

export interface ProductName {
  _id: string;
  name: string;
}
export interface Product extends ProductName {
  barcode: string;
  description: string;
  categoryId: string;
  metricPackageId: string;
  images: string[];
  productAttributes: ProductAttribute[];
  tag: string;
  storeId: string;
  createdAt: string;
  totalStockInMetricPackage: number;
  productPackages: ProductPackage[];
  category: ProductCategory;
  metricPackage: ProductPackage;
}

export interface ProductLight {
  _id: string;
  name: string;
}

export interface ProductPackage {
  _id: string;
  name: string;
  description: string;
  trackIndex: number;
  productId: string;
  unit: string;
  unitQuantity: number;
  totalStock: number;
  parent: string;
  priorityPrice: number;
  stockLimit: number;
  storeId: string;
  createdAt: string;
  price: Price;             // comes from price list
  deduction: number;
  stocks: Stock[];          // list of stock, paginated
}

export interface Price {
  _id: string;
  packageId: string;
  sellingPrice: number;
  costPrice: number;
  newSellingPrice: number;
  newCostPrice: number;
  deduction: number;
  storeId: string;
  timestamp: string;
  createdAt: string;
}

export interface Store {
  _id: string;
  name: string;
  address: Address;
  shopType: string;
  ownerId: string;
  createdAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

export interface Stock {
  _id: string;
  packageId: string;
  stockQty: number;
  costPerPackage: number;
  sellPerPackage: number;
  deduction: number;
  timestamp: string;
  storeId: string;
  createdAt: string;
}

export interface StoreSetting {
  _id: string;
  storeId: string;
  shopType: string;
  shouldReconcileStockPrice: string;
  shouldBroadcastOrderAtStockLimit: string;
  shouldSendEmailNotification: string;
  shouldSendSmsNotification: string;
  shouldSendPushNotification: string;
  shouldSendAppNotification: string;
  shouldSendRestockAlert: string;
  shouldSendDebtorAlert: string;
  shouldShowPriceMovement: string;
  shouldShowInventory: string;
  shouldShowDeliveryStatus: string;
  shouldSendSalesAlert: string;
}

export interface UserProductCounts {
  totalProduct: number;
  totalProductThisYear: number;
  totalProductThisMonth: number;
  totalProductToday: number;
}

export interface RestockCounts {
  totalRestock: number;
  totalRestockThisYear: number;
  totalRestockThisMonth: number;
  totalRestockToday: number;
}
