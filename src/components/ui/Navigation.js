import React, { Component } from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'
import dalLogo from "../../static/img/dalLogo.png"
import { FaTimesCircle, FaHome } from "react-icons/lib/fa/"

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

    render() {
        // console.log("rendering NavBar")
        return (
            <div>
                <Navbar color="inverse" inverse toggleable>
                    <Container>
                        <NavbarToggler right onClick={this.toggle}/>
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

