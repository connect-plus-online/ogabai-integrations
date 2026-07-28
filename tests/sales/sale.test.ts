import { beforeAll, describe, expect, it } from "vitest";
import { createProductService, ProductService } from "../../src/services/inventory/product.service";
export { type PackageService } from "../../src/services/inventory/package.service";
import { getProduct, saleTransactionData } from "../dummy";
import { Product, Sale, Transaction } from "../../src/types";
import { type TransactionService, createTransactionService } from "../../src/services/sales/transaction.service";
import { initTestEnv } from "../testEnv";
import { createUserService, UserService } from "../../src/services/user/user.service";
import { createSaleService, SaleService } from "../../src";



describe.sequential("Sales API", () => {
    let productService: ProductService;
    let transactionService: TransactionService
    let userService: UserService
    let storeId: string
    let saleService: SaleService
    
    let productId: string;
    let product: Product;
    let env: Awaited<ReturnType<typeof initTestEnv>>;
    let transactionId: string|undefined;
    beforeAll(async() => {
        env = await initTestEnv()
        storeId = env?.storeId!
        const storeClient = env?.storeClient!
        saleService = createSaleService(storeClient!);
    });
    // it("should create product", async () => {
    //     const res = await productService.addProduct({
    //         product: getProduct(storeId || ""),
    //         template: false
    //     })
    //     expect(res?.product).not.toBeNull();
    //     productId = res?.product?._id || "";
    // });
    // it("should get product with packages", async () => {
    //     const res = await productService.getProduct({
    //         product: {
    //             _id: productId
    //         },            
    //     })
    //     expect(res?.product?.productPackages.length).greaterThan(0);
    //     product = res?.product as Product;
    // });
    it("Get sales", async () => {
        const res = await saleService.getSales({
            limit: 10,
            skip: 0,
        })
        expect(res?.total).greaterThan(0)
        expect(res?.sales.length).greaterThan(0)
    })
   
});