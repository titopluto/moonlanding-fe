import { connect } from "react-redux"
import PdfList from "../ui/DocPdfList"
import { activeDocPdf } from "../../actions"
import {fetchDocs} from "../../actions";


const mapStateToProps = (state) => {
	return (
    	{ pdfs: state.doc_pdfs.documents }
	)
}



export default connect(mapStateToProps, { fetchDocs, activeDocPdf })(PdfList)
