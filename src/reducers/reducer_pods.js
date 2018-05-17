const podsReducer = (state={}, action) => {
    switch(action.type) {
        case "RECEIVE_PODS":
          return action.payload.reduce((acc, pod) => {
            if (!acc[pod.name]) {
              acc[pod.name] = []
            }
          acc[pod.name].push(pod)
          return acc
    }, {})

 default:
            return state
    }
}

export default podsReducer;
