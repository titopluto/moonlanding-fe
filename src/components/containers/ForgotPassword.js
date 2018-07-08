import {connect} from "react-redux"
import ForgotPassword from "../ui/ForgotPassword"
import {forgotPassword} from "../../actions";

const mapStateToProps = (state) => {
  return ({
    sentStatus: state.emailStatus.forgetState,
    status: state.emailStatus.status,
    error: state.emailStatus.error
  })
}

export default connect(mapStateToProps, {forgotPassword})(ForgotPassword)
