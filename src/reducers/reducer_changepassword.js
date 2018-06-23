const reducerChangePassword = (state={}, action) => {
    switch(action.type) {
      case "CHANGE_PASSWORD":
        return action.payload
      default:
        return state
    }
}

export default reducerChangePassword;
