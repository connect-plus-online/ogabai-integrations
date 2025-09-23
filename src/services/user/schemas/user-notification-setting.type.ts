export const userNotificationSettingSchema = {
    getUserNotificationSettings: (query: string) => `
        query getUserNotificationSettings($userId: String!) {
            getUserNotificationSettings(userId: $userId) {
                ${query}
            }
        }
    `,

    updateUserNotificationSettings: (mutation: string) => `
        mutation updateUserNotificationSettings($userId: String!, $userNotificationSettings: UserNotificationSettingsInput) {
            updateUserNotificationSettings(userId: $userId, userNotificationSettings: $userNotificationSettings) {
                ${mutation}
            }
        }
    `
}