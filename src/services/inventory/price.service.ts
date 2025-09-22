import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { priceSchema } from "./schema/price.schema";
import { 
  AddPriceRequest, AddPriceResponse, addPriceResponseFields, AddPriceResponseFields, 
  addPriceResponseNestedFields, 
  GetPriceRequest, GetPriceResponse, getPriceResponseFields, GetPriceResponseFields, 
  getPriceResponseNestedFields, 
  GetPricesRequest, GetPricesResponse, getPricesResponseFields, GetPricesResponseFields,
  getPricesResponseNestedFields,
  RemovePriceRequest,
  RemovePriceResponse,
  removePriceResponseFields,
  UpdatePriceRequest,
  UpdatePriceResponse,
  UpdatePriceResponseFields,
  updatePriceResponseFields,
  updatePriceResponseNestedFields,
} from "./types/price.type";

export const createPriceService = (client: GraphQLClient) => ({
  async updatePrice(
    input: UpdatePriceRequest, 
    fetchFields?: {
      root?: (keyof UpdatePriceResponse)[],
      nestedFields?: UpdatePriceResponseFields
    },
    option?: RequestOption
  ): Promise<UpdatePriceResponse | null> {
    const res = await client.request<{ updatePrice: UpdatePriceResponse }, UpdatePriceRequest>(
      priceSchema.updatePrice(
        gqlQueryStringBuilder<UpdatePriceResponse, UpdatePriceResponseFields>(
          fetchFields?.root ?? updatePriceResponseFields,
          fetchFields?.nestedFields ?? updatePriceResponseNestedFields,
        )
      ), 
      input, 
      option
    );
    return res.data?.updatePrice ?? null;
  },
  async removePrice(
    input: RemovePriceRequest, 
    fetchFields?: {
      root?: (keyof RemovePriceResponse)[],
    },
    option?: RequestOption
  ): Promise<RemovePriceResponse | null> {
    const res = await client.request<{ removePrice: RemovePriceResponse }, RemovePriceRequest>(
      priceSchema.removePrice(
        gqlQueryStringBuilder<RemovePriceResponse>(
          fetchFields?.root ?? removePriceResponseFields,
        )
      ), 
      input, 
      option
    );
    return res.data?.removePrice ?? null;
  },
  async addPrice(
    input: AddPriceRequest, 
    fetchFields?: {
      root?: (keyof AddPriceResponse)[],
      nestedFields?: AddPriceResponseFields
    },
    option?: RequestOption
  ): Promise<AddPriceResponse | null> {
    const res = await client.request<{ addPrice: AddPriceResponse }, AddPriceRequest>(
      priceSchema.addPrice(
        gqlQueryStringBuilder<AddPriceResponse, AddPriceResponseFields>(
          fetchFields?.root ?? addPriceResponseFields,
          fetchFields?.nestedFields ?? addPriceResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.addPrice ?? null;
  },
  async getPrice(
    input: GetPriceRequest, 
    fetchFields?: {
      root?: (keyof GetPriceResponse)[],
      nestedFields?: GetPriceResponseFields
    },
    option?: RequestOption
  ): Promise<GetPriceResponse | null> {
    const res = await client.request<{ getPrice: GetPriceResponse }, GetPriceRequest>(
      priceSchema.getPrice(
        gqlQueryStringBuilder<GetPriceResponse, GetPriceResponseFields>(
          fetchFields?.root ?? getPriceResponseFields,
          fetchFields?.nestedFields ?? getPriceResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getPrice ?? null;
  },
  async getPrices(
    input: GetPricesRequest, 
    fetchFields?: {
      root?: (keyof GetPricesResponse)[],
      nestedFields?: GetPricesResponseFields
    },
    option?: RequestOption
  ): Promise<GetPricesResponse | null> {
    const res = await client.request<{ getPrices: GetPricesResponse }, GetPricesRequest>(
      priceSchema.getPrices(
        gqlQueryStringBuilder<GetPricesResponse, GetPricesResponseFields>(
          fetchFields?.root ?? getPricesResponseFields,
          fetchFields?.nestedFields ?? getPricesResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.getPrices ?? null;
  },
})