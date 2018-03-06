import { all_pods } from "./all_pods"
import { doc_pdfs } from "./docPdfs"
import {  active_doc_pdf } from "./docPdfs"

import { lab_pdfs, active_lab_pdf } from "./labPdfs"
import { auth } from "./auth"

const initialState = {
    all_pods,
    doc_pdfs,
    active_doc_pdf,
    lab_pdfs,
    active_lab_pdf,
    auth

}

export default initialState