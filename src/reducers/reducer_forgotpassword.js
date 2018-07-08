const reducerForgotPassword = (state = {forgetState: false, status: "LOADED", error: ""}, action) => {
  switch (action.type) {
    case "FORGOT_PASSWORD":
      return {
        ...state,
        forgetState: true
      }
    case "FORGOT_ERROR":
      return {
        status: "ERROR",
        forgetState: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default reducerForgotPassword;
