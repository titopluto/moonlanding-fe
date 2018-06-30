import React, { Component } from "react";
import { Tooltip } from "reactstrap"
import { Card, CardTitle, CardText, Button,CardImg,CardImgOverlay } from 'reactstrap';
import imgRouter from "../../static/img/router.jpg";
import imgSwitch from "../../static/img/switch1.PNG";
import imgAP from "../../static/img/ap1.jpg";


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
              <div className="">
                <Card inverse  style={{margin:"10px" }}>
                  <CardImg width="100%" src={imgRouter} alt="Card image cap" style={{height:"140px"}}/>
                    <CardImgOverlay>
                      <CardTitle id={name}>{name}</CardTitle>
                      <CardText>{ `${model} Router`}</CardText>
                      <Button  href={url} id={name} color="">Connect</Button>
                    </CardImgOverlay>
              </Card>
             </div>
            )
        }else if(type==="switch") {
            return (
              <div className="">
                <Card inverse  style={{margin:"10px" }}>
                  <CardImg width="100%" src={imgSwitch} alt="Card image cap" style={{height:"140px"}}/>
                  <CardImgOverlay>
                    <CardTitle id={name}>{name}</CardTitle>
                    <CardText>{ `${model} Switch`}</CardText>
                    <Button  href={url} id={name} color="" style={{float:"left"}}>Connect</Button>
                  </CardImgOverlay>
                </Card>
              </div>
            )
        }else if(type==="ap") {
            return (
              <div className="">
                <Card inverse style={{margin:"10px" , border:"none"}}>
                  <CardImg src={imgAP}  alt="Card image cap" style={{height:"160px", width:"auto"}}/>
                  <CardImgOverlay>
                    <CardTitle id={name}>{name}</CardTitle>
                    <CardText>{ `${model} Access Point`}</CardText>
                    <Button  href={url} id={name} color="">Connect</Button>
                  </CardImgOverlay>
                </Card>
              </div>
            )
        } else if(type==="ts") {
            return (
              <div className="">
                <Card inverse style={{margin:"10px" , border:"none"}}>
                  <CardImg src={imgRouter}  alt="Card image cap" style={{height:"160px", width:"auto"}}/>
                  <CardImgOverlay style={{padding:"1.6rem"}}>
                    <CardTitle id={name}>{name}</CardTitle>
                    <CardText>{ `${model} Access Point`}</CardText>
                    <Button  href={url} id={name} color="">Connect</Button>
                  </CardImgOverlay>
                </Card>
              </div>
            )
        }else {
          return null
        }

    }
}


export default Device
