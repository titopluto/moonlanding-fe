import React from "react"

import pchute from "../../static/img/pchute.jpeg"
import redCloud from "../../static/img/red-cloud_f.jpg"

import cloudHand from "../../static/img/cloud-hand_Fotor.jpg"










const Carousel = (props) => {
    return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
                <img className="first-slide" src={pchute} alt="First slide"/>
                <div className="container">
                    <div className="carousel-caption d-none d-md-block ">
                        <h1>Master of Engineering in Internetworking</h1>
                        <p className="small">The world's longest-running graduate program dedicated to
                            Internetworking..</p>

                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img className="second-slide" src={cloudHand} alt="Second slide"/>
                <div className="container">
                    <div className="carousel-caption d-none d-md-block" style={{color: "green"}}>
                        <h1 style={{color: "darkgreen"}}>#inwkworkshop</h1>
                        <p className="" style={{color:"black"}}> Expand your knowledge! Join the Fortinet, Vmware or
                            Redhat trainings </p>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img className="third-slide" src={redCloud} alt="Third slide"/>
                <div className="container">
                    <div className="carousel-caption d-none d-md-block text-center" style={{color: "orange"}}>
                        <h1>#Inwkcloud</h1>
                        <p className="small text-white">..cloud is about how you do computing, not where you do computing...</p>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>


)}


export default Carousel
