import React, { Component } from "react";
import { Tooltip } from "reactstrap"
import routerImg from "../../static/img/router.jpg"


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
            return (<div className="device-row">
                        <a className="router" href={url} id={name} > {name} </a>
                        <Tooltip placement="top center" isOpen={this.state.tooltipOpen} target={name} toggle={this.toggle}>
                            { `${model} Router`}
                        </Tooltip>
                    </div>
            )
        } else if(type==="switch") {
            return (<div className="device-row">
                        <a className="switch" href={url} id={name} > {name} </a>
                        <Tooltip placement="top center" isOpen={this.state.tooltipOpen} target={name} toggle={this.toggle}>
                            { `${model} Switch`}
                        </Tooltip>
                    </div>
            )
        }
          else if(type==="ap") {
            return (<div className="device-row-ap">
                        <a className="ap" href={url} id={name} > {name} </a>
                        <Tooltip placement="top center" isOpen={this.state.tooltipOpen} target={name} toggle={this.toggle}>
                            { `${model} Access Point`}
                        </Tooltip>
                    </div>
            )
        } else if(type==="ts") {
            return (<div className="device-row">
                        <a className="router" href={url} id={name} > {name} </a>
                        <Tooltip placement="top center" isOpen={this.state.tooltipOpen} target={name} toggle={this.toggle}>
                            {`Terminal Server`}
                        </Tooltip>
                    </div>
            )
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