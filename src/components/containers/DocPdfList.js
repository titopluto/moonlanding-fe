import {connect} from "react-redux"
import PdfList from "../ui/DocPdfList"
import {activeDocPdf} from "../../actions"
import {fetchDocs} from "../../actions";


const mapStateToProps = (state) => {
  return (
    {
      pdfs: state.doc_pdfs.docData,
      status: state.doc_pdfs.status,
      error: state.doc_pdfs.error
    }
  )
}


export default connect(mapStateToProps, {fetchDocs, activeDocPdf})(PdfList)
