import React from "react"
import { Route, Redirect } from 'react-router-dom';
import { connect} from "react-redux"
import { verifyToken, verifyTokenExists } from "../../../actions"
import DefaultLayout from "../DefaultLayout"


const PrivateRouteLayout = ({ component, authenticated, verifyToken, ...rest }) => {
    // console.log("authenticated", authenticated)

    if (authenticated) {
        verifyToken()
        return <DefaultLayout component={component} {...rest} />
    } else {
        return <Route {...rest}
                      render={ props =>
                          <Redirect to={{pathname: '/auth', state: { from: props.location }}}/> } />
    }
}


const mapStateToProps = state => ( {authenticated: state.auth.authenticated} )

export default connect(mapStateToProps, { verifyToken, verifyTokenExists })(PrivateRouteLayout)
