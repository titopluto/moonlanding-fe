import { connect } from "react-redux"
import PdfView from "../ui/DocPdfView"

const mapStateToProps = (state) => {
	return ({
        pdf: state.doc_pdfs.documents || [],
        selected: state.doc_pdfs.selected || ""
})}



export default connect(mapStateToProps)(PdfView)