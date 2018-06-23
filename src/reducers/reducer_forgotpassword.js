const reducerForgotPassword = (state=false, action) => {
    switch(action.type) {
      case "FORGOT_PASSWORD":
        return true
      default:
        return false
    }
}

export default reducerForgotPassword;
