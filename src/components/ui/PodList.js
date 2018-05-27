import _ from "lodash"
import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Switch, Route, } from 'react-router-dom';
import "../../static/css/podStyles.css"

import DeviceList from "../containers/DeviceList"
import Pod from "./Pod"



class PodList extends Component {
    componentWillMount() {
        this.props.fetchPods();
    }

    renderPods(podDevices, podName) {
        const { history } = this.props

        return (<Pod key={podName} podDevices={podDevices} podName={podName} history={history} />)
    }


    render() {

        const { pods, match } = this.props;
        return (
            <div>
             <Switch>
                 <Route exact path={match.url} render={ () => (
                     <div className="pod-wrapper">

                     <div className="container" >
                         <ReactCSSTransitionGroup
                              transitionName="podTrans"
                                  transitionAppear={true}
                                  transitionAppearTimeout={500}
                                  transitionEnter={false}
                                  transitionLeave={false}>

                             <div className="pod-list">
                                 { _.map(pods, this.renderPods.bind(this))}
                             </div>
                         </ReactCSSTransitionGroup>
                         </div>
                     </div>


                 )}/>
                <Route path={`${match.url}/:id`} component={DeviceList} />

             </Switch>
            </div>



        )
    }
}


export default PodList;



