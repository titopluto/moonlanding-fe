const deviceReducer = (state = {status: "", error: ""}, action) => {
  switch (action.type) {
    case "DEVICES_LOADING":
      return {...state, status: "LOADING"}
    case "RECEIVE_DEVICES":
      return action.payload

    case "DEVICES_ERROR":
      return {...state, status: "ERROR", error: action.payload.error}
    default:
      return state
  }
}

export default deviceReducer;
