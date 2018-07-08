const podsReducer = (state = {status: "", podData: {}, error: ""}, action) => {
  switch (action.type) {
    case "PODS_LOADING":
      return {...state, status: "LOADING"}
    case "RECEIVE_PODS":
      return {
        ...state, podData: action.payload.reduce((acc, pod) => {
          if (!acc[pod.name]) {
            acc[pod.name] = []
          }
          acc[pod.name].push(pod)
          return acc
        }, {}), status: "LOADED"
      }
    case "PODS_ERROR":
      return {...state, status: "ERROR", error: action.payload.error}

    default:
      return state
  }
}

export default podsReducer;
