import { GraphQLClient, RequestOption } from "../../client";
import { gqlQueryStringBuilder } from "../../helpers/query";
import { Store } from "../../types";
import { createUserAccountService, createUserRoleService } from "../user";
import { storeSchema } from "./schema/store.schema";
import { 
  AddStoreRequest, addStoreResponse, AddStoreResponse, AddStoreResponseNestedFields, addStoreResponseNestedFields, 
  GetStoreCountRequest, 
  getStoreCountResponse, 
  GetStoreCountResponse, 
  GetStoreRequest, getStoreResponse, GetStoreResponse, GetStoreResponseNestedFields, getStoreResponseNestedFields, 
  GetStoresRequest, getStoresResponse, GetStoresResponse, GetStoresResponseNestedFields, getStoresResponseNestedFields,
  RemoveStoreRequest,
  removeStoreResponse,
  RemoveStoreResponse,
  UpdateStoreRequest,
  updateStoreResponse,
  UpdateStoreResponse,
  UpdateStoreResponseNestedFields,
  updateStoreResponseNestedFields, 
} from "./types/store.type";

export const createStoreService = (client: GraphQLClient) => {
  
  const addStore = async(
    input: AddStoreRequest, 
    fetchFields?: {
      root?: (keyof AddStoreResponse)[],
      nestedFields?: AddStoreResponseNestedFields
    },
    option?: RequestOption
  ): Promise<AddStoreResponse | null> =>{
    const res = await client.request<{ createStore: AddStoreResponse }, AddStoreRequest>(
      storeSchema.createStore(
        gqlQueryStringBuilder<AddStoreResponse, AddStoreResponseNestedFields>(
          fetchFields?.root ?? addStoreResponse,
          fetchFields?.nestedFields ?? addStoreResponseNestedFields
        )
      ), 
      input, 
      option
    );
    return res.data?.createStore ?? null;
  }

  return ({
    addStore,
    async updateStore(
      input: UpdateStoreRequest, 
      fetchFields?: {
        root?: (keyof UpdateStoreResponse)[],
        nestedFields?: UpdateStoreResponseNestedFields
      },
      option?: RequestOption
    ): Promise<UpdateStoreResponse | null> {
      const res = await client.request<{ updateStore: UpdateStoreResponse }, UpdateStoreRequest>(
        storeSchema.updateStore(
          gqlQueryStringBuilder<UpdateStoreResponse, UpdateStoreResponseNestedFields>(
            fetchFields?.root ?? updateStoreResponse,
            fetchFields?.nestedFields ?? updateStoreResponseNestedFields,
          )
        ), 
        input, 
        option
      );
      return res.data?.updateStore ?? null;
    },
    async removeStore(
      input: RemoveStoreRequest, 
      fetchFields?: {
        root?: (keyof RemoveStoreResponse)[],
      },
      option?: RequestOption
    ): Promise<RemoveStoreResponse | null> {
      const res = await client.request<{ deleteStore: RemoveStoreResponse }, RemoveStoreRequest>(
        storeSchema.deleteStore(
          gqlQueryStringBuilder<RemoveStoreResponse>(
            fetchFields?.root ?? removeStoreResponse,
          )
        ), 
        input, 
        option
      );
      return res.data?.deleteStore ?? null;
    },
    async getStoreCount(
      input: GetStoreCountRequest, 
      fetchFields?: {
        root?: (keyof GetStoreCountResponse)[],
      },
      option?: RequestOption
    ): Promise<GetStoreCountResponse | null> {
      const res = await client.request<{ getStoreCount: GetStoreCountResponse }, GetStoreCountRequest>(
        storeSchema.getStoreCount(
          gqlQueryStringBuilder<GetStoreCountResponse>(
            fetchFields?.root ?? getStoreCountResponse,
          )
        ), 
        input, 
        option
      );
      return res.data?.getStoreCount ?? null;
    },
    async getStore(
      input: GetStoreRequest, 
      fetchFields?: {
        root?: (keyof GetStoreResponse)[],
        nestedFields?: GetStoreResponseNestedFields;
      },
      option?: RequestOption
    ): Promise<GetStoreResponse | null> {
      const res = await client.request<{ getStore: GetStoreResponse }, GetStoreRequest>(
        storeSchema.getStore(
          gqlQueryStringBuilder<GetStoreResponse, GetStoreResponseNestedFields>(
            fetchFields?.root ?? getStoreResponse,
            fetchFields?.nestedFields ?? getStoreResponseNestedFields
          )
        ), 
        input, 
        option
      );
      return res.data?.getStore ?? null;
    },
    async getStores(
      input: GetStoresRequest, 
      fetchFields?: {
        root?: (keyof GetStoresResponse)[],
        nestedFields?: GetStoresResponseNestedFields
      },
      option?: RequestOption
    ): Promise<GetStoresResponse | null> {
      const res = await client.request<{ getStores: GetStoresResponse }, GetStoresRequest>(
        storeSchema.getStores(
          gqlQueryStringBuilder<GetStoresResponse, GetStoresResponseNestedFields>(
            fetchFields?.root ?? getStoresResponse,
            fetchFields?.nestedFields ?? getStoresResponseNestedFields
          )
        ), 
        input, 
        option
      );
      return res.data?.getStores ?? null;
    },
    useCases: {  
      retailer: {
        async createStore(
          input: Store,
          fetchFields?: {
            root?: (keyof AddStoreResponse)[],
            nestedFields?: AddStoreResponseNestedFields
          },
          option?: RequestOption
        ): Promise<Store | undefined> {
          const userAccount = createUserAccountService(client)
          const userRoleService = createUserRoleService(client)
          const userRoleRes = await userRoleService.getUserRole({
            userRole: {
              shortname: "root",
              storeId: "general",
              userRoleStatus: "active",
              isRootAdmin: "true",
            }
          })
          if(!userRoleRes || !userRoleRes?.userRole){
            throw new Error("Root user role not found")
          }
          const store = (await addStore({ store: input }, fetchFields, option))?.store;
          await userAccount.createUserAccount({
            userAccount: {
              storeId: store?._id,
              userId: store?.ownerId,
              userRoleId: userRoleRes?.userRole?.id,
            }
          })
          return store;
        }
      },

    },
  })
};

export type StoreService = ReturnType<typeof createStoreService>;