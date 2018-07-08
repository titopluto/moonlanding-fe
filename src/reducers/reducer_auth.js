import C from "../actions/constants"

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case C.AUTH_USER:
      return {...state, authenticated: true}
    case C.UNAUTH_USER:
      return {...state, authenticated: false}
    case C.AUTH_ERROR:
      return {...state, error: action.payload}
    case C.CLEAR_AUTH_ERROR:
      return {...state, error: ""}
    default:
      return state
  }
}

export default authReducer
