import { beforeAll, describe, expect, it } from "vitest";
import {  createOrderService, createTransactionService, OrderService, TransactionService } from "../../src";
import { initTestEnv } from "../testEnv";
import { getProduct, saleTransactionData } from "../dummy";

describe.sequential("Order API", () => {
    let txId: string;
    let transactionService: TransactionService;
    let orderService: OrderService;
    let storeId: string;
    let env : Awaited<ReturnType<typeof initTestEnv>>;

    beforeAll(async () => {
        env = await initTestEnv();
        const storeClient = env?.storeClient!;
        storeId = env?.storeId!
        transactionService = createTransactionService(storeClient);
        orderService = createOrderService(storeClient);
    });

    it("should create order", async () => {
        const saleData = saleTransactionData(getProduct(storeId), storeId, env?.userId!);
        const txRes = await orderService.createOrder({
            transaction: {
                from: env?.userId || "",
                amountPaid: 100,
                amountTotal: 100,
                storeId: storeId,
                createdById: env?.userId || "",
            },
            sales: saleData.sales ?? [],
        })
        expect(txRes?.transaction?._id).not.toBeNull();
        txId = txRes?.transaction?._id || "";
    })
    it("should get orders by transaction id", async () => {
        const res = await orderService.getOrders({
            order: {
                transactionId: txId
            },
            limit: 10,
            skip: 0
        })
        expect(res?.orders.length).greaterThan(0);
    })
   
})