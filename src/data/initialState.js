import { lab_pdfs, active_lab_pdf } from "./labPdfs"
import { auth } from "./auth"

const initialState = {
    all_pods: {},
    doc_pdfs: {
        documents: []
    },
    lab_pdfs,
    active_lab_pdf,
    auth
}

export default initialState