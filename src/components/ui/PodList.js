import _ from "lodash"
import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Switch, Route,} from 'react-router-dom';
import "../../static/css/podStyles.css"

import DeviceList from "../containers/DeviceList"
import Pod from "./Pod"
import MainComponent from "./MainComponent";


class PodList extends Component {
  componentWillMount() {
    this.props.fetchPods();
  }

  renderPods(podDevices, podName) {
    const {history} = this.props

    return (<Pod key={podName} podDevices={podDevices} podName={podName} history={history}/>)
  }


  render() {
    console.log("match podlist==>", this.props.match.params)
    const {status, pods, match, error} = this.props;

    return <MainComponent status={status} errorMessage={error}>
      <div>
        <Switch>
          <Route exact path={match.url} render={() => (
            <div className="pod-wrapper">

              <div className="container">
                <ReactCSSTransitionGroup
                  transitionName="podTrans"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={false}>

                  <div className="pod-list">
                    {_.map(pods, this.renderPods.bind(this))}
                  </div>
                </ReactCSSTransitionGroup>
              </div>
            </div>


          )}/>
          <Route path={`${match.url}/:id`} render={(props)=><DeviceList pods={pods} {...props}/>}/>



        </Switch>
      </div>
    </MainComponent>
  }
}


export default PodList;



