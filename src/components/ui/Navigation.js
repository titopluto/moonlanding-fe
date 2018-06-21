import React, { Component } from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'
import dalLogo from "../../static/img/dalLogo.png"
import { FaTimesCircle, FaHome } from "react-icons/lib/fa/"
import { IoDocumentText, IoCalendar } from 'react-icons/lib/io/';

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        this.renderAuthButton = this.renderAuthButton.bind(this)
        
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    renderAuthButton() {
        const { authenticated, history, logoutUser } = this.props
        if(authenticated) {
            return <Link to=""><span className="mx-3" onClick={()=>logoutUser(history)}>
                <FaTimesCircle size={35} /> </span></Link>

        }
    }

    renderPasswordChangeButton() {
        const { authenticated, history, logoutUser } = this.props
        if(authenticated) {
            return <NavLink className="fa-docs" to="/changepassword">
                    <IoDocumentText style={{ marginTop:`10px`}} size={75}/>
                </NavLink>

        }
    }

    render() {
        // console.log("rendering NavBar")
        return (
            <div>
                <Navbar color="inverse" expand>
                    <Container>
                        <NavbarToggler onClick={this.toggle}/>
                        <NavbarBrand>
                            <img src={dalLogo} className="d-inline-block align-items-center logo" alt="Dal Logo"/>
                            inwk<span className="bold-gold">dal</span>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink activeClassName="active" exact to="/">
                                        <FaHome size={35}/>
                                    </NavLink>
                                    {this.renderAuthButton()}
                                    {this.renderPasswordChangeButton()}
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;

