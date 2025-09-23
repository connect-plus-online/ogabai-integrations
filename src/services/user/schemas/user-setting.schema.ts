export const userSettingSchema = {
    updateUserSetting: (mutation: string) => `
        mutation updateUserSetting($userId: String!, $userSetting: UserSettingInput!) {
            updateUserSetting(userId: $userId, userSetting: $userSetting) {
                ${mutation}
            }
        }
    `,

    getUserSetting: (query: string) => `
        query getUserSetting($userId: String!) {
            getUserSetting(userId: $userId) {
                ${query}
            }
        }
    `,
}