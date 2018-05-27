import React from "react"

import pchute from "../../static/img/banner1.jpg"
import redCloud from "../../static/img/cloud-network.jpg"

import cloudHand from "../../static/img/bulb.jpg"
import {UncontrolledCarousel} from 'reactstrap'


class Carousel extends React.Component {
  componentWillMount() {
    this.props.fetchCarousel()
  }

  render(){
    const getImage  = (imageName) => {
      if(imageName == "banner1.jpg"){
        return pchute
      }else if(imageName == "bulb.jpg"){
        return cloudHand
      }
      return redCloud
    }
    const carouselItems = this.props.carouselList.map(function (carousel) {
      return {
        src : getImage(carousel.img),
        altText : carousel.title,
        caption : carousel.description,
        header : carousel.title
      }

    })

    return <UncontrolledCarousel items={carouselItems} />
    }
}

export default Carousel

