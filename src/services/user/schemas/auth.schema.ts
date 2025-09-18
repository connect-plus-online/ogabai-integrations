export const authSchema = {
  checkRegistration: (query: string) => `
    query checkRegistration($phone: String!) {
      checkRegistration(phone: $phone) {
        ${query}
      }
    }
  `,

  login: (query: string) => `
    mutation login($phone: String!, $pin: String!, $userType: UserTypeInputEnum) {
      login(phone: $phone, pin: $pin, userType: $userType) {
        ${query}
      }
    }
  `,

  signUp: (query: string) => `
    mutation signUp($phone: String!, $pin: String!, $storeName: String!, $email: String, $userType: UserTypeInputEnum) {
      signUp(phone: $phone, pin: $pin, storeName: $storeName, email: $email, userType: $userType) {
        ${query}
      }
    }
  `,

  resetPin: (query: string) => `
    mutation resetPin($phone: String!, $pin: String!) {
      resetPin(phone: $phone, pin: $pin) {
        ${query}
      }
    }
  `,

  sendOTP: (query: string) => `
    mutation sendOTP($phone: String!) {
      sendOTP(phone: $phone) {
        ${query}
      }
    }
  `,

  verifyOTP: (query: string) => `
    mutation verifyOTP($phone: String!, $otp: String!) {
      verifyOTP(phone: $phone, otp: $otp) {
        ${query}
      }
    }
  `,

  updateUser: (mutation: string) => `
    mutation updateUser($userId: String!, $userUpdate: UpdateUserFieldInput, $imageType: String) {
      updateUser(userId: $userId, userUpdate: $userUpdate, imageType: $imageType) {
        ${mutation}
      }
    }
  `,

  updateTxPin: (mutation: string) => `
    mutation updateTxPin($userId: String!, $pin: String!, $oldPin: String!) {
      updateTxPin(userId: $userId, pin: $pin, oldPin: $oldPin) {
        ${mutation}
      }
    }
  `,

}