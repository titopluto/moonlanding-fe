import { connect } from "react-redux"
import PdfList from "../ui/DocPdfList"
import { activeDocPdf } from "../../actions"


const mapStateToProps = (state) => (
    { pdfs: state.doc_pdfs }
)



export default connect(mapStateToProps, { activeDocPdf })(PdfList)
