import React from "react";
import { Container, Row} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import "../../static/css/NavigatorStyle.css"
import "../../static/css/iconStyles.css"
import { FaCubes, FaBook } from "react-icons/lib/fa/"
import { MdPermContactCalendar } from "react-icons/lib/md/";


const WindowNavigator = () => {
    // console.log("rendering Features")
    return(
        <div className="Navigator-wrapper">
            <Container>
                <Row>
                    <div className="col-lg-3">

                        <NavLink activeClassName="fa-cubes-active" to="/pods" className="fa-cubes">
                            <FaCubes size={110}/>
                        </NavLink>

                        <h2> Pod Access </h2>

                    </div>
                    <div className="col-lg-3">
                        <NavLink activeClassName="fa-cubes-active" to="/docs" className="fa-cubes">

                            <FaBook size={110}/>

                        </NavLink>

                        <h2> Documentations</h2>

                    </div>

                    <div className="col-lg-3">
                        <NavLink activeClassName="fa-cubes-active" to="/lab-docs" className="fa-cubes">

                            <FaBook size={110}/>

                        </NavLink>

                        <h2> Laboratory Materials </h2>

                    </div>

                    <div className="col-lg-3">
                       <a href="http://access.inwk.dal.ca" className="fa-cubes">
                            <MdPermContactCalendar size={110}/>
                        </a>
                        <h2> Pod Reservation</h2>

                    </div>

                </Row>
            </Container>
        </div>
    )}

export default WindowNavigator