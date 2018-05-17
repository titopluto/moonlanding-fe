import React from "react";
import { Container, Row, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import "../../static/css/NavigatorStyle.css"
import "../../static/css/iconStyles.css"
import { FaCubes, FaBook, FaFileTextO, FaServer, FaStackOverflow} from "react-icons/lib/fa/"
import { MdPermContactCalendar } from "react-icons/lib/md/";
import { IoDocumentText, IoCalendar } from 'react-icons/lib/io/';
import { GoCalendar, GoPlug} from 'react-icons/lib/go/'

const WindowNavigator = () => {
    return(
        <div className="Navigator-wrapper" >
            <Container>
                <Row className = "center">
                    <Col lg="4" md="4" xs="6" sm="6">

                    <div  className="fa-cubes">

                        <NavLink className="fa-pods" to="/pods">
                            <GoPlug style={{ marginTop:`10px`}} size={60}/>
                            <div style={{ marginTop:`10px`}}>Pod Access</div>
                        </NavLink>

                    </div>
                    </Col>
                    <Col lg="4" md="4" xs="6" sm="6">
                        <div className="fa-cubes">
                            <NavLink className="fa-docs" to="/docs">
                                <IoDocumentText style={{ marginTop:`10px`}} size={60}/>
                                <div style={{ marginTop:`10px`}}>Documents</div>
                            </NavLink>

                        </div>
                    </Col>
                    <Col lg="4" md="4" xs="12" sm="12">
                    <div className="fa-cubes">
                       <a className="fa-reservation" href="http://access.inwk.dal.ca">
                            <GoCalendar style={{ marginTop:`10px`}} size={60}/>
                            <div style={{ marginTop:`10px`}}>Pod reservation</div>
                        </a>

                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )}

export default WindowNavigator