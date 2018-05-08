import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import C from "../actions/constants"
import podsReducer from "./reducer_pods"
import authReducer from "./reducer_auth"
import { docPdfReducer,
        labPdfReducer, activeLabPdfReducer} from "./reducer_pdfs"
import initState from "../data/initialState"

const appReducer = combineReducers(
    {
        all_pods: podsReducer,
        doc_pdfs : docPdfReducer,
        lab_pdfs: labPdfReducer,
        active_lab_pdf: activeLabPdfReducer,
        auth: authReducer,
        form: formReducer
    }
)

const rootReducer = (state, action) => {
  if (action.type === C.LOGOUT_USER) {
    state = initState
  }

  return appReducer(state, action)
}

export default rootReducer;
