import React from 'react';
import {Link} from "react-router-dom"

import imgRouter from "../../static/img/router.jpg";
import imgSwitch from "../../static/img/switch.jpg";
import imgAP from "../../static/img/ap.jpg";


class Pod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDevices: false
    }
    this.toggleDeviceLink = this.toggleDeviceLink.bind(this)
  }

  toggleDeviceLink(podName, history) {
    history.push("/")
  }


  getDeviceImg(type) {
    if (type === "router") return imgRouter;
    else if (type === "switch") return imgSwitch;
    else return imgAP;
  }


  render() {
    const {podName, podDevices} = this.props
    const podNameDisplay = podName.match(/\d+/)[0]

    return (

      <Link className="pod pod-background-2" to={`/pods/${podDevices[0].id}`}> {podNameDisplay} </Link>


    );
  }
}

export default Pod;




