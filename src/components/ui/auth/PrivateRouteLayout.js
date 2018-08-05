import React from "react"
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux"
import {verifyToken, verifyTokenExists} from "../../../actions"
import DefaultLayout from "../DefaultLayout";
import MainComponent from "../MainComponent";

class PrivateRouteLayout extends React.Component {
  componentWillMount() {
    this.props.verifyToken()
  }

  render() {
    const {status, authenticated, component, ...rest} = this.props
    console.log("Status ---> ", status)

    return (
      <MainComponent status={status}>
        {
          authenticated ? <DefaultLayout component={component} {...rest} /> : (
            <Route {...rest}
                   render={props =>
                     <Redirect to={{pathname: '/auth', state: {from: props.location}}}/>}/>
          )
        }
      </MainComponent>
    )
  }
}

const mapStateToProps = state => ({authenticated: state.auth.authenticated, status: state.auth.status})

export default connect(mapStateToProps, {verifyToken, verifyTokenExists})(PrivateRouteLayout)
