import React, { Component } from "react";
import { Tooltip } from "reactstrap"
import { Card, CardTitle, CardText, Button,CardImg,CardImgOverlay } from 'reactstrap';
import imgRouter from "../../static/img/router.JPG";


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
            return (<div className="">


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
        } else if(type==="switch") {
            return (<div className="">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin:"10px" }}>
        <CardTitle id={name}>{name}</CardTitle>
        <CardText>{ `${model} Switch`}</CardText>
        <Button  href={url} id={name} color="secondary">Connect</Button>
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
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin:"10px" }}>
                      <a href={url}> <CardImg width="100%" src={imgRouter} alt="Router"/>
                      </a>
        <CardTitle id={name}>{name}</CardTitle>
        <CardText>{ `${model} Terminal Server`}</CardText>
        <Button  href={url} id={name} color="secondary">Connect</Button>
                </Card>
                    </div>
            )
        } else {
          return null
        }

    }
}


export default Device
