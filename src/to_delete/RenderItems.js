import React, { Component } from "react";
import _ from "lodash"
import { Container, Row, Col } from "reactstrap"
import Pod from "../Pod"
import { CSSTransitionGroup } from 'react-transition-group'
import PodList from "../../containers/PodList"
import DeviceList from "../DeviceList"

class RenderItems extends Component {
    constructor(props) {
        super();
        this.state = {
            showPodList: false
        }
    }


    render() {
        return (
            <div>
                {this.state.showPodList ? <PodList/> : <DeviceList/>}
            </div>

        )
    }
}


export default RenderItems;



