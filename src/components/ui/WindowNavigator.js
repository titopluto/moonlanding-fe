import React from "react";
import { Container, Row, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import "../../static/css/NavigatorStyle.css"
import "../../static/css/iconStyles.css"
import pod from "../../static/img/icon1.JPG";
import doc from "../../static/img/icon2.JPG";
import calendar from "../../static/img/icon3.JPG";

import { FaList} from "react-icons/lib/fa/"
import { MdPermContactCalendar } from "react-icons/lib/md/";
import { IoDocumentText, IoCalendar } from 'react-icons/lib/io/';
import { GoCalendar} from 'react-icons/lib/go/'

const WindowNavigator = () => {
    return(
        <div className="Navigator-wrapper" >
            <Container>
                <Row className = "center">
                    <Col lg="4" md="4" xs="4" sm="4">
                      <NavLink className="fa-reservation" to="/pods">
                        <img className="" src={pod} width="170" height="150" alt=""/>
                        <div className="font-1" style={{ marginTop:`10px`}}>Pod Access</div>
                      </NavLink>
                    </Col>
                    <Col lg="4" md="4" xs="4" sm="4">
                       <NavLink className="fa-reservation" to="/docs">
                         <img className="" src={doc} width="170" height="150" alt=""/>
                         <div className="font-1" style={{ marginTop:`10px`}}>Documents</div>
                       </NavLink>
                    </Col>
                    <Col lg="4" md="4" xs="4" sm="4">
                    <div className="">
                       <a className="fa-reservation" target="_blank" href="http://access.inwk.dal.ca">
                         <img className="" src={calendar} width="170" height="150" alt=""/>
                         <div className="font-1" style={{ marginTop:`10px`}}>Pod reservation</div>
                        </a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )}

export default WindowNavigator
