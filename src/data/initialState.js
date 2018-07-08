import {lab_pdfs, active_lab_pdf} from "./labPdfs"
import {auth} from "./auth"

const initialState = {
  all_pods: {},
  doc_pdfs: {
    documents: []
  },
  device_pods: {
    devices: []
  },
  carousel: [],
  lab_pdfs,
  active_lab_pdf,
  auth
}

export default initialState
