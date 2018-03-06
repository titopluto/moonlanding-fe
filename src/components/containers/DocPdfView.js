import { connect } from "react-redux"
import PdfView from "../ui/DocPdfView"

const mapStateToProps = (state) => ({
        pdf: state.active_doc_pdf
})



export default connect(mapStateToProps)(PdfView)