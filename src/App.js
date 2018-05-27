import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import PodList from "./components/containers/PodList"
import Carousel from "./components/containers/Carousel"
import DocPdfList from "./components/containers/DocPdfList"
import LabPdfList from "./components/containers/LabPdfList"
import Login from "./components/ui/auth/Login"
import NoMatch from "./components/ui/NoMatch"
import PrivateRouteLayout from "./components/ui/auth/PrivateRouteLayout"


const App = ({history}) => (
    <Router>
        <div>

                <Switch>
                    <PrivateRouteLayout exact path="/" component={Carousel}/>
                    <PrivateRouteLayout  path="/pods" component={PodList}/>
                    <PrivateRouteLayout  path="/docs" component={DocPdfList}/>
                    <PrivateRouteLayout  path="/lab-docs" component={LabPdfList}/>
                    <PrivateRouteLayout exact path="/" component={PodList}/>
                    <Route path="/auth" component={Login} />
                    <Route component={NoMatch} />
                </Switch>

        </div>
    </Router>

)

export default App;

