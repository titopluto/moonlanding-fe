const deviceReducer = (state={}, action) => {
  switch(action.type) {
    case "RECEIVE_DEVICES":
      return action.payload

    default:
      return state
  }
}

export default deviceReducer;
