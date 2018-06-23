import { connect } from "react-redux"
import ForgotPassword from "../ui/ForgotPassword"
import {forgotPassword} from "../../actions";

const mapStateToProps = (state) =>{
    return ({
      status : state.emailStatus
    })
}

export default connect(mapStateToProps, {forgotPassword})(ForgotPassword)