import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

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

const App = ({history}) => (
  <Router>
    <div>

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

    </div>
  </Router>

)

export default App;

