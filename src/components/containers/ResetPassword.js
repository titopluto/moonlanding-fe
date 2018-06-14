import { connect } from "react-redux"
import ResetPassword from "../ui/ResetPassword"
import {resetPassword} from "../../actions";

const mapStateToProps = (state) =>{
    return ({})
}

export default connect(mapStateToProps, {resetPassword})(ResetPassword)