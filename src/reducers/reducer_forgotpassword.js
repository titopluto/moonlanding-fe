const reducerForgotPassword = (state={ forgetState :false, status:"loaded"}, action) => {
    switch(action.type) {
      case "FORGOT_PASSWORD":
        return {
          forgetState :true
        }
      case "FORGOT_ERROR":
        return {
            status:"error",
            forgetState : false
          }

      default:
        return false
    }
}

export default reducerForgotPassword;
