import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import App from "../App"
import App2 from "./App2"

import Login from "../components/ui/auth/Login"
import NoMatch from "../components/ui/NoMatch"
import Require_auth from "../components/ui/auth/Require_auth"



const Main = () => (
    <Router>
        <App/>
    </Router>

)

export default Main;

