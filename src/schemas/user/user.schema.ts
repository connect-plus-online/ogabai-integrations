export const userSchema = {
  getUser: (query: string) => `
    query getUser($user: UserInput!) {
      user(user: $user) {
        ${query}
      }
    }
  `,

  getUsers: (query: string) => `
    query getUsers($user: UserInput, $userIds: [String], $limit: Int!, $skip: Int!) {
      users(user: $user, userIds: $userIds, limit: $limit, skip: $skip) {
        ${query}
      }
    }
  `,
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

export default userSchema