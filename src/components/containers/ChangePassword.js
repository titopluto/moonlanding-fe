import {connect} from "react-redux"
import ChangePassword from "../ui/ChangePassword"
import {changePassword,resetChangePassword} from "../../actions";


const mapStateToProps = (state) => {
  return ({

    resetState: state.resetStatus.resetState,
    status: state.resetStatus.status,
    error: state.resetStatus.error
  })
}

export default connect(mapStateToProps, {changePassword, resetChangePassword})(ChangePassword)
