import { connect } from "react-redux"
import ChangePassword from "../ui/ChangePassword"
import {changePassword} from "../../actions";

const mapStateToProps = (state) =>{
    return ({
      status : state.resetStatus.resetState,
      isError :state.resetStatus.status
    })
}

export default connect(mapStateToProps, {changePassword})(ChangePassword)
