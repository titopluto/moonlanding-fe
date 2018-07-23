import {all_pods} from "../data/all_pods"


const deviceReducer = (state = {status: "", error: "", all_devices:{}}, action) => {
  switch (action.type) {
    case "DEVICES_LOADING":
      return {...state, status: "LOADING"}
    case "RECEIVE_DEVICES":
      return action.payload

    case "RECEIVE_ALL_DEVICES":
      return {...state, all_devices: all_pods}

    case "DEVICES_ERROR":
      return {...state, status: "ERROR", error: action.payload.error}
    default:
      return state
  }
}

export default deviceReducer;
