import React from 'react';
import _ from "lodash"
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardImg, CardGroup, CardBlock, CardFooter
} from 'reactstrap';

import imgRouter from "../../static/img/router.jpg";
import imgSwitch from "../../static/img/switch.jpg";
import imgAP from "../../static/img/ap.jpg";


class Pod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  getDeviceImg(type) {
    if (type === "router") return imgRouter;
    else if (type === "switch") return imgSwitch;
    else return imgAP;
  }


  render() {
    const {podDevices, podName} = this.props
    const routers = _.filter(podDevices, {"type": "router"})
    const switches = _.filter(podDevices, {"type": "switch"})
    const accessPoints = _.filter(podDevices, {"type": "accessPoint"})
    const termServers = _.filter(podDevices, {"type": "ts"})

    return (
      <div className="col-2">
        <Button className="btn-square" onClick={this.toggle}>{podName} </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> {podName}  </ModalHeader>
          <ModalBody>
            <CardGroup className="routers">
              {
                _.map(routers, router => {
                  return (
                    <Card key={router.name}>
                      <a href={router.url}> <CardImg src={imgRouter}
                                                     alt="Router"/>
                      </a>
                      <CardFooter>
                        <small className="text-muted">{router.model} {router.name}</small>
                      </CardFooter>
                    </Card>
                  )
                })
              }
            </CardGroup>
            <CardGroup className="switches">
              {
                _.map(switches, _switch => {
                  return (
                    <Card key={_switch.name}>
                      <a href={_switch.url}> <CardImg src={imgSwitch} alt="Router"/>
                      </a>
                      <CardFooter>
                        <small className="text-muted">{_switch.model} {_switch.name}</small>
                      </CardFooter>
                    </Card>
                  )
                })
              }
            </CardGroup>
            <CardGroup className="accesspoints">
              {
                _.map(accessPoints, ap => {
                  return (
                    <Card key={ap.name}>
                      <a href={ap.url}> <CardImg src={imgAP} alt="AP"/>
                      </a>
                      <CardFooter>
                        <small className="text-muted">{ap.model} {ap.name}</small>
                      </CardFooter>
                    </Card>
                  )
                })
              }
            </CardGroup>
            <CardGroup className="terminalServers">
              {
                _.map(termServers, ts => {
                  return (
                    <Card key={ts.name}>
                      <a href={ts.url}> <CardImg src={imgRouter} alt="Router"/>
                      </a>
                      <CardFooter>
                        <small className="text-muted">{ts.name}</small>
                      </CardFooter>
                    </Card>
                  )
                })
              }

            </CardGroup>

          </ModalBody>

        </Modal>


      </div>
    );
  }
}

export default Pod;




