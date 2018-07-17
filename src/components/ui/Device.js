import React, { Component } from "react";
import { Card, CardTitle, CardText, Button,CardImg,CardImgOverlay,CardFooter,CardHeader,CardBody } from 'reactstrap';
import imgRouter from "../../static/img/router.jpg";
import imgSwitch from "../../static/img/switch.jpg";
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
              <CardHeader id={name}>{name}
                <CardText>{ `${model} Switches`}</CardText>
              </CardHeader>
              <CardBody style={{padding:"0px"}}>
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
            <CardHeader id={name}>{name}
              <CardText>{ `${model} Switches`}</CardText>
            </CardHeader>
            <CardBody style={{padding:"0px"}}>
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
          <Card style={{margin:"10px" }}>
            <CardHeader id={name}>{name}
              <CardText>{ `${model} Access Points`}</CardText>
            </CardHeader>
            <CardBody style={{padding:"0px"}}>
              <img src={imgAP} alt="Card image cap" style={{height:"140px"}} />
            </CardBody>
            <CardFooter className="">
              <Button  href={url} id={name} color="">Connect</Button>
            </CardFooter>
          </Card>
        </div>
      )
    } else if(type==="ts") {
      return (<div className="">
          <Card>
            <CardHeader id={name}>{name}
              <CardText>{ `${model} Terminal Server`}</CardText>
            </CardHeader>
            <CardBody style={{padding:"0px"}}>
              <img src={imgRouter} alt="Card image cap" style={{height:"140px"}} />
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

