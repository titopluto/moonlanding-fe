import React from "react"
import { Route, } from 'react-router-dom';

import Navigation from "../containers/Navigation"
import WindowNavigator from "./WindowNavigator"
import PageContent from "./PageContent"
import Collaboration from "./Collaboration"
import Footer from "./Footer"

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => {
        return(
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
    )}} />
  )
};

export default DefaultLayout