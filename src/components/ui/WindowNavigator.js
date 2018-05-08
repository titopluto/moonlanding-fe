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
    // console.log("rendering Features")
    return(
        <div className="Navigator-wrapper" >
            <Container>
                <Row className = "center">
                    <Col lg="3" md="6" xs="6" sm="6">

                    <div>

                        <NavLink activeClassName="fa-cubes-active" to="/pods" className="fa-cubes">
                            <GoPlug size={90}/>
                        </NavLink>

                        <h2 style={{ marginTop:`10px`}}> Pod Access </h2>

                    </div>
                    </Col>
                    <Col lg="3" md="6" xs="6" sm="6">
                    <div>
                        <NavLink activeClassName="fa-cubes-active" to="/docs" className="fa-cubes">

                            <IoDocumentText size={90}/>

                        </NavLink>

                        <h2 style={{ marginTop:`10px`}}> Documentations</h2>

                    </div>
                    </Col>
                    <Col lg="3" md="6" xs="6" sm="6">
                    <div>
                        <NavLink activeClassName="fa-cubes-active" to="/lab-docs" className="fa-cubes">

                            <FaStackOverflow size={90}/>

                        </NavLink>

                        <h2 style={{ marginTop:`10px`}}> Lab manuals </h2>

                    </div>
                    </Col>
                    <Col lg="3" md="6" xs="6" sm="6">
                    <div>
                       <a href="http://access.inwk.dal.ca" className="fa-cubes">
                            <GoCalendar size={90}/>
                        </a>
                        <h2 style={{ marginTop:`10px`}}> Pod Reservation</h2>

                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )}

export default WindowNavigator