export function mapAuthCodeToMessage(authCode) {
    switch (authCode) {
      case "auth/invalid-password":
        return "Password provided is not corrected";
  
      case "auth/invalid-email":
        return "Email provided is invalid";
      
      case "auth/email-already-in-use":
        return "This emal is already in use"
  
      default:
        return "";
    }
  }
  