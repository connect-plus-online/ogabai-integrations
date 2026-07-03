import { AddTransactionResponse, AddTransactionResponseNestedFields, createTransactionService, orderIntegration, OrderCRUD, orderDeleteIntegration, orderListIntegration, Sale, Transaction } from "../..";
import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { buildSchema } from "../../helpers/schema-builder";
import { createOperationExecutor } from "../../helpers/service.factory";
import { orderSchema } from "./schemas/order.schema";
// import { 
//   GetOrderRequest, getOrderResponse, GetOrderResponse, GetOrderResponseNestedFields, getOrderResponseNestedFields, 
//   GetOrdersRequest, getOrdersResponse, GetOrdersResponse, GetOrdersResponseNestedFields, getOrdersResponseNestedFields,

// } from "./types/order.type";
  export const createOrderService = (client: GraphQLClient) =>  ({
    async createOrder(
      input: {
        transaction: Pick<Transaction, "from"|"amountPaid"|"amountTotal"|"storeId"|"createdById">,
        sales: Sale[],
      },
      fetchFields?: {
        root?: (keyof AddTransactionResponse)[],
        nestedFields?: AddTransactionResponseNestedFields
      },
      option?: RequestOption
    ): Promise<AddTransactionResponse | null> {
      return createTransactionService(client).addTransaction({
        transaction: {
          ...input.transaction,
          transactionType: "order",
          sales: input.sales,
        }
      }, fetchFields, option);
    },
    _createOrder: createOperationExecutor<
        "createOrder",
        OrderCRUD["CreateRequest"],
        OrderCRUD["CreateResponse"],
        typeof orderIntegration.create.nestedFields
    >(
        client,
        "createOrder",
        {
            schema: buildSchema(orderSchema.create),
            defaultRootFields: orderIntegration.create.responseFields,
            defaultNestedFields: orderIntegration.create.nestedFields,
        }
    ),
    updateOrder: createOperationExecutor<
        "updateOrder",
        OrderCRUD["UpdateRequest"],
        OrderCRUD["UpdateResponse"],
        typeof orderIntegration.update.nestedFields
    >(
        client,
        "updateOrder",
        {
            schema: buildSchema(orderSchema.update),
            defaultRootFields: orderIntegration.update.responseFields,
            defaultNestedFields: orderIntegration.update.nestedFields,
        }
    ),
    getOrder: createOperationExecutor<
        "getOrder",
        OrderCRUD["GetRequest"],
        OrderCRUD["GetResponse"],
        typeof orderIntegration.get.nestedFields
    >(
        client,
        "getOrder",
        {
            schema: buildSchema(orderSchema.get),
            defaultRootFields: orderIntegration.get.responseFields,
            defaultNestedFields: orderIntegration.get.nestedFields,
        }
    ),
    deleteOrder: createOperationExecutor<
        "deleteOrder",
        OrderCRUD["DeleteRequest"],
        OrderCRUD["DeleteResponse"],
        {}
    >(
        client,
        "deleteOrder",
        {
            schema: buildSchema(orderSchema.delete),
            defaultRootFields: orderDeleteIntegration.responseFields,
            defaultNestedFields: {},
        }
    ),
    getOrders: createOperationExecutor<
        "getOrders",
        OrderCRUD["ListRequest"],
        OrderCRUD["ListResponse"],
        typeof orderListIntegration.nestedFields
    >(
        client,
        "getOrders",
        {
            schema: buildSchema(orderSchema.list),
            defaultRootFields: [...orderListIntegration.responseFields],
            defaultNestedFields: orderListIntegration.nestedFields,
        }
    ),
    
})

export type OrderService = ReturnType<typeof createOrderService>;