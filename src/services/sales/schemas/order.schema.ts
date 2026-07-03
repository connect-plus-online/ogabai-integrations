import { DefaultSchemaFields, SchemaConfig } from "@chijioke/graphql-client"

export const orderSchema:Record<DefaultSchemaFields, SchemaConfig> = {
    get: {
        operation: "query",
        name: "getOrder",
        variables: "($order: OrderInput!)",
        field: "(order: $order)",
    },
    list: {
        operation: "query",
        name: "getOrders",
        variables:
            "($limit: Int!, $skip: Int!, $search: String, $order: OrderInput, $orderIds: [String])",
        field:
            "(limit: $limit, skip: $skip, search: $search, order: $order, orderIds: $orderIds)",
    },
    create: {
        operation: "mutation",
        name: "createOrder",
        variables: "($order: OrderInput!)",
        field: "(order: $order)",
    },
    update: {
        operation: "mutation",
        name: "updateOrder",
        variables: "($orderId: String!, $order: OrderInput!)",
        field: "(orderId: $orderId, order: $order)",
    },
    delete: {
        operation: "mutation",
        name: "deleteOrder",
        variables: "($orderId: String!)",
        field: "(orderId: $orderId)",
    },
}
