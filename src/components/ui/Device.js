import React, { Component } from "react";
import { Tooltip } from "reactstrap"
import routerImg from "../../static/img/router.jpg"
import { Card, CardTitle, CardText, Button } from 'reactstrap';


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
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin:"10px" }}>
        <CardTitle id={name}>{name}</CardTitle>
        <CardText>{ `${model} Router`}</CardText>
        <Button  href={url} id={name} color="secondary">Connect</Button>
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








// const Device = ({obj, type}) => {
//     const name = obj.name
//     const url = obj.url
//
//     if (type==="router") {
//         return <a className="router" href={url} > {name} </a>
//     } else if(type==="switch") {
//         return <a className="switch" href={url}> {name} </a>
//     }
//       else if(type==="ap") {
//         return <a className="ap" href={url} > {name} </a>
//     } else {
//         return <a className="router" href={url} > {name} </a>
//     }
//
//
// }

export default Device
