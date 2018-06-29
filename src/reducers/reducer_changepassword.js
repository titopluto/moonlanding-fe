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
      case "OLD_PASSWORD":
        return {
          status :"old_password",
          resetState :false
        }
      default:
        return state
    }
}

export default reducerChangePassword;
