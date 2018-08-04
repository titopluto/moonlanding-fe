import React from "react"
import {Route,} from 'react-router-dom';

import Navigation from "../containers/Navigation"
import WindowNavigator from "./WindowNavigator"
import PageContent from "./PageContent"
import Collaboration from "./Collaboration"
import Footer from "./Footer"

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => {
      if (matchProps.match.path === "/") {
        return (
          <div>
            <Navigation/>
            <div className="home-section">
              <Component {...matchProps} />
              <WindowNavigator/>
              <PageContent/>
              <Collaboration/>
              <Footer/>
            </div>
          </div>
        )
      }
      else if (matchProps.match.path === "/changepassword") {

        return (
          <div>
            <Navigation/>
            <div className="home-section">
              <Component {...matchProps} />
            </div>
          </div>
        )
      }
      else {
        return (
          <div>
            <Navigation/>
            <div className="home-section">
              <Component {...matchProps} />
              <WindowNavigator/>
              <Collaboration/>
              <Footer/>
            </div>
          </div>
        )
      }
    }}/>
  )
};

export default DefaultLayout
