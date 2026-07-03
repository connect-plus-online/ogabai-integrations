import { beforeAll, describe, expect, it } from "vitest";
import { createProductService, ProductService } from "../../src/services/inventory/product.service";
export { type PackageService } from "../../src/services/inventory/package.service";
import { getProduct, saleTransactionData } from "../dummy";
import { Product, Sale, Transaction } from "../../src/types";
import { type TransactionService, createTransactionService } from "../../src/services/sales/transaction.service";
import { initTestEnv } from "../testEnv";
import { createUserService, UserService } from "../../src/services/user/user.service";



describe.sequential("Sales API", () => {
    let productService: ProductService;
    let transactionService: TransactionService
    let userService: UserService
    let storeId: string
    
    let productId: string;
    let product: Product;
    let env: Awaited<ReturnType<typeof initTestEnv>>;
    let transactionId: string|undefined;
    beforeAll(async() => {
        env = await initTestEnv()
        storeId = env?.storeId!
        const storeClient = env?.storeClient!
        productService = createProductService(storeClient);
        transactionService = createTransactionService(storeClient);
        userService = createUserService(storeClient);
    });
    it("should create product", async () => {
        const res = await productService.addProduct({
            product: getProduct(storeId || ""),
            template: false
        })
        expect(res?.product).not.toBeNull();
        productId = res?.product?._id || "";
    });
    it("should get product with packages", async () => {
        const res = await productService.getProduct({
            product: {
                _id: productId
            },            
        })
        expect(res?.product?.productPackages.length).greaterThan(0);
        product = res?.product as Product;
    });
    it("should create transaction - sale", async () => {
        const res = await transactionService.addTransaction({
            transaction: saleTransactionData(product, storeId, env?.userId!),
        })
        expect(res?.transaction?._id).not.toBeNull();
        transactionId = res?.transaction._id;
    })
    it("should get transaction and transaction should contain sales", async () => {
      const res = await transactionService.getTransaction({
        transaction: {
          _id: transactionId
        }
      })
      expect(res?.transaction?.sales.length).greaterThan(0)
    })
    it("transaction count should increase", async () => {
      const res = await userService.getUserDashStats({
        storeId
      })
      console.log({res: JSON.stringify(res)})
      expect(res?.saleCounts.totalSales).greaterThan(0)
    })
});