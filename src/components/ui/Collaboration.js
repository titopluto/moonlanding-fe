import React from "react"
import { Container } from "reactstrap";

import ciscoImg from "../../static/img/cisco-logo.png";
import vmwareImg from "../../static/img/vmware.png";
import redhatImg from "../../static/img/redhat.png";
import juniperImg from "../../static/img/juniper.png";
import fortinetImg from "../../static/img/fortinet.png";





const Collaboration = () => {
    // console.log("rendering Collaboration")
    return(
    <div className="company">
        <Container>
            <div className="company-header">
                Internetworking Collaborates Partnership with:
            </div>
            <div className="company-body">

                    <div className="">
                        <img src={ciscoImg} alt="cisco"/>
                    </div>

                    <div className="">
                        <img src={vmwareImg} alt="vmware"/>
                    </div>

                    <div className="">
                        <img src={redhatImg} alt="redhat"/>
                    </div>

                    <div className="">
                        <img src={fortinetImg} alt="fortinet"/>
                    </div>

                    <div className="">
                        <img src={juniperImg} alt="juniper"/>
                    </div>
            </div>
        </Container>
    </div>
)}

export default Collaboration