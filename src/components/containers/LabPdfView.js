import {connect} from "react-redux"
import LabPdfView from "../ui/LabPdfView"

const mapStateToProps = (state) => ({
  pdf: state.active_lab_pdf
})


export default connect(mapStateToProps)(LabPdfView)
