const reducerChangePassword = (state={resetState :false, status:"loaded"}, action) => {
    switch(action.type) {
      case "CHANGE_PASSWORD":
        return {
          resetState :true
        }
      case "PASSWORD_ERROR":
        return {
          status:"error",
          resetState : false
        }
      default:
        return state
    }
}

export default reducerChangePassword;
