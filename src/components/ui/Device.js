import React, { Component } from "react";
import { Card, CardText, CardHeader,CardBody } from 'reactstrap';
import imgRouter from "../../static/img/router.jpg";
import imgSwitch from "../../static/img/switch.jpg";
import imgTerminal from "../../static/img/terminal.jpg";

import imgAP from "../../static/img/ap2.jpg";
import MainComponent from "./MainComponent";

class Device extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    const {obj, type} = this.props
    const name = obj.name
    const url = obj.url
    const model = obj.model

    if (type==="router") {
      return (
        <MainComponent status={this.props.status} errorMessage={this.props.error}>
          <div className="">
            <Card>
              <CardHeader id={name} className='card-txt text-center font-weight-bold text-success'>
                {name}
              </CardHeader>
              <CardBody >
                <a href={url}>
                  <img width="100%" src={imgRouter} alt="Card cap router" />
                </a>
                <CardText className='card-txt text-center text-dark'>{ `${model} Router`}</CardText>
              </CardBody>

            </Card>
          </div>
        </MainComponent>
      )
    } else if(type==="switch") {
      return (<div className="">
          <Card style={{margin:"10px" }}>
            <CardHeader id={name} className='card-txt text-center font-weight-bold text-success'>{name}
            </CardHeader>
            <CardBody >
              <a href={url}> <img width="100%" src={imgSwitch} alt="Card cap switch"  /> </a>
              <CardText className='card-txt text-center text-dark'>{ `${model} Switch`}</CardText>
            </CardBody>
          </Card>
        </div>
      )
    }
    else if(type==="ap") {
      return (<div className="">
          <Card style={{margin:"10px" }}>
            <CardHeader id={name} className='card-txt text-center font-weight-bold text-success'>{name}
            </CardHeader>
            <CardBody >
              <a href={url}>
                <img className='rounded mx-auto d-block' height='120px' src={imgAP} alt="Card cap ap" />
              </a>
              <CardText className='card-txt text-center text-dark'>{ `${model} Access Point`}</CardText>
            </CardBody>
          </Card>
        </div>
      )
    } else if(type==="ts") {
      return (<div className="">
          <Card>
              <CardHeader id={name} className='card-txt text-center font-weight-bold text-success'>
                {name}

              </CardHeader>
              <CardBody >
                <a href={url}>
                  <img height="70px" rc={imgTerminal} alt="Card cap ts" />
                </a>
                <CardText className='card-txt text-center text-dark'>{ `${model}`}</CardText>
              </CardBody>

            </Card>

        </div>
      )
    } else {
      return null
    }

  }
}


export default Device

