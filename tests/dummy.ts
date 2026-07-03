import { Product, Sale, Transaction } from "../src/types";
import Chance from "chance";
const chance = new Chance();
function createTransaction(product: Partial<Product>, storeId: string, createdById: string): Partial<Transaction> {
  if (!product?.productPackages?.length) {
    throw new Error(`Product ${product._id} has no packages`);
  }

  const sortedPackages = [...product.productPackages].sort(
    (a, b) => a.trackIndex - b.trackIndex
  );

  // Pick a random package
  const randomPackage =
    sortedPackages[Math.floor(Math.random() * sortedPackages.length)];

  const qty = 3;

  const sale: Sale = {
    _id: crypto.randomUUID(),
    productId: product?._id!,
    packageId: randomPackage._id,
    quantity: qty,
    amountTotal: 0,
    createdAt: new Date().toISOString(),
    storeId,
  };

  const transaction: Partial<Transaction> = {
    _id: crypto.randomUUID(),
    from: "",
    to: "",
    paymentType: "cash",
    paymentDate: new Date().toISOString(),
    amountTotal: sale.amountTotal,
    amountPaid: sale.amountTotal,
    saleIds: [sale._id],
    platform: "pos",
    fromWallet: "",
    toWallet: "",
    createdAt: new Date().toISOString(),
    sales: [sale],
    storeId,
    createdById,
  };

  return transaction;
}
export { createTransaction as saleTransactionData};

export const getProductTemplate = (storeId: string):Partial<Product> => ({
    name: chance.name(),
    description: chance.name(),
    storeId,
    category: {
        name: chance.name(),
        _id: "",
        description: "",
        categoryStatus: "active",
        storeId: storeId || "",
        createdAt: "",
        status: "",
        isTemplate: ""
    },
    smallestPackageId: "1",
    productPackages: [
        {
            _id: "1",
            name: chance.name(),
            description: "",
            trackIndex: 0,
            productId: "",
            unit: "",
            unitQuantity: 0,
            totalStock: 0,
            barcode: "",
            priorityPrice: 0,
            stockLimit: 0,
            storeId: "",
            createdAt: "",
            deduction: 0,
        },
        {
            _id: "2",
            name: chance.name(),
            description: "",
            trackIndex: 1,
            productId: "",
            unit: "1",
            unitQuantity: 10,
            totalStock: 0,
            barcode: "",
            priorityPrice: 0,
            stockLimit: 0,
            storeId: "",
            createdAt: "",
            deduction: 0,
        },
        {
            _id: "3",
            name: chance.name(),
            description: "",
            trackIndex: 1,
            productId: "",
            unit: "2",
            unitQuantity: 10,
            totalStock: 0,
            barcode: "",
            priorityPrice: 0,
            stockLimit: 0,
            storeId: "",
            createdAt: "",
            deduction: 0,
        }
    ],
    barcode: "",
    categoryId: "",
    images: [],
    productAttributes: [],
    tag: "",
    createdAt: "",
    totalStockInSmallestPackage: 0,
    _id: ""
    
})
export const getProduct = (storeId: string):Partial<Product> => ({
    name: chance.name(),
    description: chance.name(),
    storeId,
    category: {
        name: chance.name(),
        _id: "",
        description: "",
        categoryStatus: "active",
        storeId: storeId || "",
        createdAt: "",
        status: "",
        isTemplate: ""
    },
    smallestPackageId: "1",
    productPackages: [
        {
            _id: "1",
            name: chance.name(),
            description: "",
            trackIndex: 0,
            productId: "",
            unit: "",
            unitQuantity: 0,
            totalStock: 0,
            barcode: "",
            priorityPrice: 0,
            stockLimit: 50,
            storeId: "",
            createdAt: "",
            deduction: 0,
            stocks: [{
                _id: "",
                packageId: "",
                stockQty: 100,
                costPerPackage: 100,
                sellPerPackage: 120,
                deduction: 0,
                storeId: "",
                createdAt: "",
                expirationDate: new Date().toISOString(),
                stockType: "market"
            }]
        },
        // {
        //     _id: "2",
        //     name: chance.name(),
        //     description: "",
        //     trackIndex: 1,
        //     productId: "",
        //     unit: "1",
        //     unitQuantity: 10,
        //     totalStock: 0,
        //     barcode: "",
        //     priorityPrice: 0,
        //     stockLimit: 50,
        //     storeId: "",
        //     createdAt: "",
        //     deduction: 0,
        //     stocks: [{
        //         _id: "",
        //         packageId: "",
        //         stockQty: 100,
        //         costPerPackage: 100,
        //         sellPerPackage: 120,
        //         deduction: 0,
        //         storeId: "",
        //         createdAt: "",
        //         expirationDate: ""
        //     }
        // ]},
        // {
        //     _id: "3",
        //     name: chance.name(),
        //     description: "",
        //     trackIndex: 1,
        //     productId: "",
        //     unit: "2",
        //     unitQuantity: 10,
        //     totalStock: 0,
        //     barcode: "",
        //     priorityPrice: 0,
        //     stockLimit: 50,
        //     storeId: "",
        //     createdAt: "",
        //     deduction: 0,
        //     stocks: [{
        //         _id: "",
        //         packageId: "",
        //         stockQty: 100,
        //         costPerPackage: 100,
        //         sellPerPackage: 120,
        //         deduction: 0,
        //         storeId: "",
        //         createdAt: "",
        //         expirationDate: ""
        //     }
        // ]}
    ],
    barcode: "",
    categoryId: "",
    images: [],
    productAttributes: [],
    tag: "",
    createdAt: "",
    totalStockInSmallestPackage: 0,
    _id: ""
    
})