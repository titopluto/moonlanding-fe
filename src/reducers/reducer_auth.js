import C from "../actions/constants"

const authReducer = (state = {status: "LOADED", authenticated: false}, action) => {
  switch (action.type) {
    case C.AUTH_VERIFY_USER:
      return {...state, status: "LOADING", authenticated: false}
    case C.AUTH_USER:
      return {...state, status: "LOADED", authenticated: true}
    case C.UNAUTH_USER:
      return {...state, status: "ERROR", authenticated: false}
    case C.AUTH_ERROR:
      return {...state, status: "ERROR", authenticated: false, error: action.payload}
    case C.CLEAR_AUTH_ERROR:
      return {...state, status: "LOADED", error: ""}
    default:
      return state
  }
}

export default authReducer
