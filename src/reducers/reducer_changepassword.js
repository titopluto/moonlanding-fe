const reducerChangePassword = (state = {resetState: false, status: "LOADED", error: ""}, action) => {
  switch (action.type) {
    case "RESET_CHANGE_PASSWORD":
      return{
        resetState: false,
        status: "LOADED",
        error: ""
      }
    case "CHANGE_PASSWORD":
      return {
        ...state,
        resetState: true
      }
    case "CHANGE_PASSWORD_ERROR":
      return {
        status: "ERROR",
        resetState: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default reducerChangePassword;
