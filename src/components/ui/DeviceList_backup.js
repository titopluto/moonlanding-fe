import React from "react";
import _ from "lodash"
import {Link} from "react-router-dom"
import Device from "./Device"
import "../../static/css/deviceStyles.css"
import {MdSubdirectoryArrowLeft} from "react-icons/lib/md/"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {TiArrowLeftThick} from "react-icons/lib/ti/"


class DeviceList extends React.Component {
  componentWillMount() {
    const {match} = this.props
    this.props.fetchDevices(match.params.id);
  }

  render() {
    const {match, devices: {devices}} = this.props
    const formattedDevices = devices.map(function (device) {
      return {
        url: device.dev_url,
        name: device.device.name,
        type: device.device.type,
        model: device.device.description
      }

    })
    const routers = _.filter(formattedDevices, {"type": "ROUTER"})
    const switches = _.filter(formattedDevices, {"type": "SWITCH"})
    const accessPoints = _.filter(formattedDevices, {"type": "ACCESS_POINT"})
    const termServers = _.filter(formattedDevices, {"type": "TS"})

    return (


      <div className="device-wrapper">

        <div className="container">
          <ReactCSSTransitionGroup
            transitionName="podTrans"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>

            <div className="device-heading d-flex flex-div">
              <div className="back-arrow p-2">
                <Link to="/pods" className="ti-back-arrow"> <TiArrowLeftThick size={70}/> </Link>
              </div>
              <div className="p-2">
                <p className="lead heading"> {match.params.id} </p>
              </div>

            </div>

            <div className="device-container">
              <div className="d-flex justify-content-center">

                {
                  _.map(routers, item =>
                    <Device key={item.name} obj={item} type="router"/>
                  )
                }
              </div>

              <div className="d-flex justify-content-center">
                {
                  _.map(switches, item =>

                    <Device key={item.name}
                            obj={item}
                            type="switch"
                    />
                  )

                }

              </div>

              <div className="d-flex justify-content-center">
                {
                  _.map(accessPoints, item =>

                    <Device key={item.name}
                            obj={item}
                            type="ap"
                    />
                  )

                }

              </div>

              <div className="d-flex justify-content-center">
                {
                  _.map(termServers, item =>

                    <Device key={item.name}
                            obj={item}
                            type="ts"
                    />
                  )

                }

              </div>
            </div>

          </ReactCSSTransitionGroup>

        </div>
      </div>
    )
  }
}


export default DeviceList
