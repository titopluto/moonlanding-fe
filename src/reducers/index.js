import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import C from "../actions/constants"
import podsReducer from "./reducer_pods"
import authReducer from "./reducer_auth"
import { docPdfReducer,
        labPdfReducer, activeLabPdfReducer} from "./reducer_pdfs"
import initState from "../data/initialState"
import deviceReducer from "./reducer_device";
import carouselReducer from "./reducer_carousel";

const appReducer = combineReducers(
    {
        all_pods: podsReducer,
        device_pods : deviceReducer,
        doc_pdfs : docPdfReducer,
        lab_pdfs: labPdfReducer,
        active_lab_pdf: activeLabPdfReducer,
        carousel : carouselReducer,
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
