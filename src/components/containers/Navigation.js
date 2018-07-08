import {withRouter} from 'react-router'
import {connect} from "react-redux"
import Navigation from "../ui/Navigation"
import {logoutUser} from "../../actions"


const mapStateToProps = (state) => ({authenticated: state.auth.authenticated})

export default withRouter(connect(mapStateToProps, {logoutUser})(Navigation))
