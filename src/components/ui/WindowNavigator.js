import React from "react";
import { Container, Row, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import "../../static/css/NavigatorStyle.css"
import "../../static/css/iconStyles.css"
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

                    <div  className="fa-cubes">

                        <NavLink className="fa-pods" to="/pods">
                            <FaList class="hello" style={{ marginTop:`10px`,borderColor:'black'}} size={75}/>
                            <div className="font-1" style={{ marginTop:`10px`}}>Pod Access</div>
                        </NavLink>

                    </div>
                    </Col>
                    <Col lg="4" md="4" xs="4" sm="4">
                        <div className="fa-cubes">
                            <NavLink className="fa-docs" to="/docs">
                                <IoDocumentText style={{ marginTop:`10px`}} size={75}/>
                                <div className="font-1" style={{ marginTop:`10px`}}>Documents</div>
                            </NavLink>

                        </div>
                    </Col>
                    <Col lg="4" md="4" xs="4" sm="4">
                    <div className="fa-cubes">
                       <a className="fa-reservation" target="_blank" href="http://access.inwk.dal.ca">
                            <GoCalendar style={{ marginTop:`10px`}} size={75}/>
                            <div className="font-1" style={{ marginTop:`10px`}}>Pod reservation</div>
                        </a>

                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )}

export default WindowNavigator
