import React from "react"
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux"
import {verifyToken, verifyTokenExists} from "../../../actions"
import isTokenValid from "../../../auth/isTokenValid";
import DefaultLayout from "../DefaultLayout";

class PrivateRouteLayout extends React.Component {
  render() {
    const {component, ...rest} = this.props

    if (isTokenValid(localStorage.getItem("token"))) {
      return <DefaultLayout component={component} {...rest} />
    }
    return <Route {...rest}
                  render={props =>
                    <Redirect to={{pathname: '/auth', state: {from: props.location}}}/>}/>
  }
}


const mapStateToProps = state => ({authenticated: state.auth.authenticated})

export default connect(mapStateToProps, {verifyToken, verifyTokenExists})(PrivateRouteLayout)
