import { connect } from "react-redux"
import ChangePassword from "../ui/ChangePassword"
import {changePassword} from "../../actions";

const mapStateToProps = (state) =>{
    return ({})
}

export default connect(mapStateToProps, {changePassword})(ChangePassword)