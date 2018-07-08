import React, {Component} from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavDropdown} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom'
import dalLogo from "../../static/img/dalLogo.png"
import {FaTimesCircle, FaHome} from "react-icons/lib/fa/"
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import "../../static/css/Navigation.css"


class Navigation extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isDropdownOpen: false
    };
    this.renderAuthButton = this.renderAuthButton.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this);

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDropdown() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  }

  renderAuthButton() {
    const {authenticated, history, logoutUser} = this.props
    if (authenticated) {
      return <Link to=""><span onClick={() => logoutUser(history)}>Logout</span></Link>
    }
  }

  renderPasswordChangeButton() {

    const {authenticated, history, logoutUser} = this.props
    if (authenticated) {
      return <NavLink to="/changepassword">Change Password</NavLink>


    }
  }

  render() {
    return (
      <div>
        <Navbar color="inverse" expand>
          <Container>
            <NavbarToggler onClick={this.toggle}/>
            <NavbarBrand>
              <img src={dalLogo} className="d-inline-block align-items-center logo" alt="Dal Logo"/>
              inwk<span className="bold-gold">dal</span>
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink activeClassName="active" exact to="/">
                  <FaHome size={35}/>
                </NavLink>
                <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.toggleDropdown}>
                  <DropdownToggle caret></DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>{this.renderAuthButton()}</DropdownItem>
                    <DropdownItem>{this.renderPasswordChangeButton()}</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

