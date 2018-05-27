const carouselReducer = (state={}, action) => {
  switch(action.type) {
    case "RECEIVE_CAROUSEL":
      return action.payload

    default:
      return state
  }
}

export default carouselReducer;
