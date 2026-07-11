import { EntityCRUD } from "../../../helpers/crud.contract";
import { createDeleteIntegration, createListIntegration, createStandardEntityIntegration } from "../../../helpers/entity.factory";
import { Order } from "../../../types";
import { OrderFields, orderQuery, saleQuery } from "../sale.entity";

const ENTITY = "order" as const;

// get order
export type OrderCRUD = EntityCRUD<Order, typeof ENTITY>;

export const orderIntegration = createStandardEntityIntegration({
  key: ENTITY,
  fields: orderQuery,
  nested: {
    saleHolders: saleQuery,
  }
});

export const orderListIntegration = createListIntegration<"order", OrderFields>({
  key: ENTITY,
  fields: orderQuery,
  nested: {
    saleHolders: saleQuery,
  }
});

export const orderDeleteIntegration = createDeleteIntegration(ENTITY);