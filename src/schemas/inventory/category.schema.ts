export const categorySchema = {
  getCategory: (query: string) => `
    query getCategory($category: CategoryInput!) {
      category(category: $category) {
        ${query}
      }
    }
  `,

  getCategories: (query: string) => `
    query getCategories($category: CategoryInput, $categoryIds: [String], $limit: Int!, $skip: Int!) {
      categories(category: $category, categoryIds: $categoryIds, limit: $limit, skip: $skip) {
        ${query}
      }
    }
  `,

  addCategory: (mutation: string) => `
    mutation addCategory($category: CategoryInput!) {
      addCategory(category: $category) {
        ${mutation}
      }
    }
  `,

  updateCategory: (mutation: string) => `
    mutation updateCategory($categoryId: String!, $category: CategoryInput!) {
      updateCategory(categoryId: $categoryId, category: $category) {
        ${mutation}
      }
    }
  `,

  removeCategory: (mutation: string) => `
    mutation removeCategory($categoryId: String!) {
      removeCategory(categoryId: $categoryId) {
        ${mutation}
      }
    }
  `
}
