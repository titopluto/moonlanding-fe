import React, {Component} from "react"
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect} from "react-redux"
import PodList from "../PodList"
import Carousel from "../Carousel"


const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route {...rest} render={props => {
      return (
    authenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/auth',
        state: { from: props.location }
      }}/>
    )
  )}}/>
)


const mapStateToProps = state => ( {authenticated: state.auth.authenticated} )

export default connect(mapStateToProps)(PrivateRoute)




// class PrivateRoute extends Component {
//
//     renderx(component, props) {
//         const {authenticated} = this.props
//
//       if (authenticated) {
//           console.log("trying to render...")
//           return <Carousel/>
//   } else {
//             console.log("redirecting....")
//          return <Redirect to={{pathname: '/auth', state: { from: props.location }}}/>
//   }
//
//     }
//
//     render() {
//         const {component: Component, authenticated, ...rest} = this.props
//         return <Route {...rest} render={props => this.renderx( Component, props)} />
//     }
// }
