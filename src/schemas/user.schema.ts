export const userSchema = {
    getUsers: (query: string) => `
        query getUser($user: UserInput, $userIds: [String], $limit: Int!, $skip: Int!) {
            users(user: $user, userIds: $userIds, limit: $limit, skip: $skip) {
                ${query}
            }
        }
    `
}