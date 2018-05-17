import React from "react"

import pchute from "../../static/img/pchute.jpeg"
import redCloud from "../../static/img/cloud-network.jpg"

import cloudHand from "../../static/img/bulb.jpg"
import {UncontrolledCarousel} from 'reactstrap'


class Carousela extends React.Component {
  render(){
      const items = [
          {
              src : redCloud,
              altText: 'Slide 1',
              caption: 'Slide 1',
              header: 'Slide 1 Header'
          },
          {
              src : cloudHand,
              altText: 'Slide 2',
              caption: 'Slide 2',
              header: 'Slide 2 Header'
          },
          {
              src : pchute,
              altText: 'Slide 3',
              caption: 'Slide 3',
              header: 'Slide 3 Header'
          }
      ];
    return <UncontrolledCarousel items={items} />
    }
}

export default Carousela

