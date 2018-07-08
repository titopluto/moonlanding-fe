import {connect} from "react-redux"
import ResetPassword from "../ui/ResetPassword"
import {resetPassword} from "../../actions";

const mapStateToProps = (state) => {
  return ({
    status: state.resetStatus.resetState,
    isError: state.resetStatus.status
  })
}

export default connect(mapStateToProps, {resetPassword})(ResetPassword)
