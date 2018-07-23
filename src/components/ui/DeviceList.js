import React from "react";
import _ from "lodash"
import {Link} from "react-router-dom"
import Device from "./Device"
import "../../static/css/deviceStyles.css"
import {MdSubdirectoryArrowLeft} from "react-icons/lib/md/"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {TiArrowLeftThick} from "react-icons/lib/ti/"
import classnames from "classnames";
import { Card, CardTitle, CardText, Button,CardImg,
  CardImgOverlay,CardFooter,CardHeader,
  CardBody,TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';

import uuidv1 from "uuid/v1"





class DeviceList extends React.Component {
  componentWillMount() {
    const {match} = this.props

    this.props.fetchAllDevices();

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: `pod ${this.props.match.params.id}`
    };
  }

  toggle(tab) {
    console.log("active-tab", this.state.activeTab)
    if (this.state.activeTab !== tab) {
      console.log("active-tab-after", this.state.activeTab)
      this.setState({
        activeTab: tab
      });
    }
  }

  renderNavs(podDevices, podName, x) {

    return (
      <div className='col-sm-1' key={uuidv1()}>
      <NavItem key={uuidv1()}>
            <NavLink
              className={classnames({ active: this.state.activeTab === podName })}
              onClick={() => { this.toggle(podName); }}>
              {podName}
            </NavLink>
      </NavItem>
      </div>
    )
  }

  renderTabContents(item) {

    return (
      <div>  </div>
    )
  }

  renderTabs(podDevices, podName) {

    const {match, all_devices} = this.props

    const routers = _.filter(podDevices, {"type":"router"} )
    const switches = _.filter(podDevices, {"type":"switch"} )
    const accessPoints = _.filter(podDevices, {"type":"accessPoint"} )
    const termServers = _.filter(podDevices, {"type":"ts"} )


    return (
      <TabPane key={uuidv1()} tabId={podName}>
              <div className="d-flex justify-content-center">
                { _.map(routers, item => <Device key={item.name} obj={item} type="router"/>) }
              </div>

              <div className="d-flex justify-content-center">
                { _.map(switches, item => <Device key={item.name} obj={item} type="switch"/>)}
              </div>

              <div className="d-flex justify-content-center">
                { _.map(accessPoints, item => <Device key={item.name} obj={item} type="ap"/>) }
              </div>

              <div className="d-flex justify-content-center">
                { _.map(termServers, item => <Device key={item.name} obj={item} type="ts" />) }
              </div>
      </TabPane>
    )
  }



  render() {

    const { match, devices: {devices}, pods, all_devices } = this.props
    let odd_pods = {}
    let even_pods = {}

    _.forEach(all_devices, (value, key) => {
        if (parseInt(key.split(" ")[1]) % 2 === 0) {
            even_pods[key] = value
        }
        else {
          odd_pods[key] = value
        }
    })


    console.log(even_pods)

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
              {/*<div className="back-arrow p-2">*/}
                {/*<Link to="/pods" className="ti-back-arrow"> <TiArrowLeftThick size={70}/> </Link>*/}
              {/*</div>*/}
              {/*<div className="p-2">*/}
              {/*</div>*/}

            </div>

            <div className="device-container">

                <div className="nav-tab">
                <Nav tabs>
                  <div className="row">
                  { _.map(odd_pods, this.renderNavs.bind(this)) }
                  </div>
                  <div className="row">
                    { _.map(even_pods, this.renderNavs.bind(this)) }
                  </div>
                </Nav>
              </div>

              <TabContent key={uuidv1()} activeTab={this.state.activeTab}>

                  { _.map(all_devices, this.renderTabs.bind(this)) }

              </TabContent>

            </div>

          </ReactCSSTransitionGroup>

        </div>
      </div>
    )
  }
}


export default DeviceList
