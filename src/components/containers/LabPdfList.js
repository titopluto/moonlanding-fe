import { connect } from "react-redux"
import LabPdfList from "../ui/LabPdfList"
import { activeLabPdf } from "../../actions"


const mapStateToProps = (state) => (
    { pdfs: state.lab_pdfs }
)



export default connect(mapStateToProps, { activeLabPdf })(LabPdfList)
