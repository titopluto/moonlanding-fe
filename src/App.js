import React, { Component} from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist'




import PodList from "./components/containers/PodList"
import ChangePassword from "./components/containers/ChangePassword"
import Carousel from "./components/containers/Carousel"
import DocPdfList from "./components/containers/DocPdfList"
import LabPdfList from "./components/containers/LabPdfList"
import Login from "./components/ui/auth/Login"
import ForgotPassword from "./components/containers/ForgotPassword"
import ResetPassword from "./components/containers/ResetPassword"
import NoMatch from "./components/ui/NoMatch"
import PrivateRouteLayout from "./components/ui/auth/PrivateRouteLayout"
import PageContent from "./components/ui/PageContent"

//Redux Store
import storeFactory from "./store"



const store = storeFactory
window.store = store


class App extends Component {

  constructor() {
    super()
    this.state = {
      rehydrated: false,
      expContract: false,
    }
  }

  componentWillMount(){
    persistStore(store, {}, () => { this.setState({ rehydrated: true } )})
   }

  toggle(name) {
    this.setState({
    [name]: !this.state[name],
    progress: 0.5
    })
  }

  render() {
    if(!this.state.rehydrated){
      return (
        <div className="animated fadeIn"> ..... </div>
      )
    }
    return (
      <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <PrivateRouteLayout exact path="/" component={Carousel}/>
        <PrivateRouteLayout exact path="/" component={PageContent}/>
        <PrivateRouteLayout path="/pods" component={PodList}/>
        <PrivateRouteLayout path="/docs" component={DocPdfList}/>
        <PrivateRouteLayout path="/lab-docs" component={LabPdfList}/>
        <PrivateRouteLayout exact path="/changepassword" component={ChangePassword}/>
        <Route path="/auth" component={Login}/>
        <Route path="/forgotpassword" component={ForgotPassword}/>
        <Route path="/resetpassword/:token" component={ResetPassword}/>
        <Route component={NoMatch}/>
      </Switch>
    </BrowserRouter>
  </Provider>
    )
  }
}

export default App







// const App = ({history}) => (
//   <Router>
//     <div>
//
//       <Switch>
//         <PrivateRouteLayout exact path="/" component={Carousel}/>
//         <PrivateRouteLayout exact path="/" component={PageContent}/>
//         <PrivateRouteLayout path="/pods" component={PodList}/>
//         <PrivateRouteLayout path="/docs" component={DocPdfList}/>
//         <PrivateRouteLayout path="/lab-docs" component={LabPdfList}/>
//         <PrivateRouteLayout exact path="/changepassword" component={ChangePassword}/>
//         <Route path="/auth" component={Login}/>
//         <Route path="/forgotpassword" component={ForgotPassword}/>
//         <Route path="/resetpassword/:token" component={ResetPassword}/>
//         <Route component={NoMatch}/>
//       </Switch>
//
//     </div>
//   </Router>
//
// )
//
// export default App;
