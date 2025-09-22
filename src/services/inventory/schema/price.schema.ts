export const priceSchema = {
  getPrice: (query: string) => `
    query getPrice($price: PriceInput!) {
      price(price: $price) {
        ${query}
      }
    }
  `,

  getPrices: (query: string) => `
    query getPrices($price: PriceInput, $priceIds: [String], $limit: Int!, $skip: Int!) {
      prices(price: $price, priceIds: $priceIds, limit: $limit, skip: $skip) {
        ${query}
      }
    }
  `,

  addPrice: (mutation: string) => `
    mutation addPrice($price: PriceInput!) {
      addPrice(price: $price) {
        ${mutation}
      }
    }
  `,

  updatePrice: (mutation: string) => `
    mutation updatePrice($priceId: String!, $price: PriceInput!) {
      updatePrice(priceId: $priceId, price: $price) {
        ${mutation}
      }
    }
  `,

  removePrice: (mutation: string) => `
    mutation removePrice($priceId: String!) {
      removePrice(priceId: $priceId) {
        ${mutation}
      }
    }
  `
}
