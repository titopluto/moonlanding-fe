import React, { Component } from "react";
import { Card, CardTitle, CardText, Button,CardImg,CardImgOverlay,CardFooter,CardHeader,CardBody } from 'reactstrap';
import imgRouter from "../../static/img/router.jpg";
import imgSwitch from "../../static/img/switch.jpg";
import imgAP from "../../static/img/ap.jpg";
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
            <CardHeader id={name}>{name}</CardHeader>
            <CardBody>
              <img  width="100%" src={imgRouter} alt="Card image cap" style={{height:"140px"}} />
            </CardBody>
            <CardFooter className="">
              <Button  href={url} id={name} color="">Connect</Button>

            </CardFooter>
          </Card>
        </div>
        </MainComponent>
      )
    } else if(type==="switch") {
      return (<div className="">
          <Card style={{margin:"10px" }}>
            <CardHeader id={name}>{name}</CardHeader>
            <CardBody>
              <img  width="100%" src={imgSwitch} alt="Card image cap" style={{height:"140px"}} />
            </CardBody>
            <CardFooter className="">
              <Button  href={url} id={name} color="">Connect</Button>

            </CardFooter>
          </Card>
        </div>
      )
    }
    else if(type==="ap") {
      return (<div className="">
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin:"10px" }}>
            <CardTitle id={name}>{name}</CardTitle>
            <CardText>{ `${model} Access Points`}</CardText>
            <Button  href={url} id={name} color="secondary">Connect</Button>
          </Card>
        </div>
      )
    } else if(type==="ts") {
      return (<div className="">
          <Card>
            <CardHeader id={name}>{name}</CardHeader>
            <CardBody>
              <img  width="100%" src={imgRouter} alt="Card image cap" style={{height:"140px"}} />
            </CardBody>
            <CardFooter className="">
              <Button  href={url} id={name} color="">Connect</Button>

            </CardFooter>
          </Card>
        </div>
      )
    } else {
      return null
    }

  }
}


export default Device


