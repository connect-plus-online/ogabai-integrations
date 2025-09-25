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
    mutation signUp($firstName: String!, $lastName: String!, $phone: String!, $pin: String!, $storeName: String!, $storeLocation: String, $email: String, $userType: UserTypeInputEnum) {
      signUp( firstName: $firstName, lastName: $lastName, phone: $phone, pin: $pin, storeName: $storeName, storeLocation: $storeLocation, email: $email, userType: $userType) {
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
  updateTxPin: (mutation: string) => `
    mutation updateTxPin($userId: String!, $pin: String!, $oldPin: String!) {
      updateTxPin(userId: $userId, pin: $pin, oldPin: $oldPin) {
        ${mutation}
      }
    }
  `,
}