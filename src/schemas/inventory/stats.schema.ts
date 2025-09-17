export const statsSchema = {
  getInventoryStats: (query: string) => `
    query getInventoryStats($storeId: String!) {
      inventoryStats(storeId: $storeId) {
        ${query}
      }
    }
  `
}
