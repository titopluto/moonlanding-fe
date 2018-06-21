const reducerForgotPassword = (state={}, action) => {
    switch(action.type) {
      case "FORGOT_PASSWORD":
        return action.payload
      default:
        return state
    }
}
  
export default reducerForgotPassword;  