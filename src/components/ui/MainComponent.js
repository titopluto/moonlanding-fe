import React from "react"
import DangerMessage from "./DangerMessage";
import loader from "../../static/img/loader1.gif";

const MainComponent = ({status, children, errorMessage}) => {

  if (status === "LOADING") {
    // TODO: loader
    return <div className="textCenter">
      <img src={loader} alt={"loader"}/>
    </div>
  }

  return <div>
    {status ==="ERROR" ? <DangerMessage message={errorMessage}/> : null}
    {children}
  </div>
}

export default MainComponent
