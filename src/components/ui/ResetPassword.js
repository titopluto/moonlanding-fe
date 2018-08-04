import React, {Component} from "react";
import {Link} from 'react-router-dom'
import "../../static/css/newPassword.css"
import lock from "../../static/img/lock2.gif";
import tick from "../../static/img/tick.gif";
import {Button} from 'reactstrap';
import {Helmet} from 'react-helmet';
import passwordValidator from 'password-validator';
import Navigation from "../containers/Navigation"


const schema = new passwordValidator();

schema
  .is().min(4)                                    // Minimum length 8
  .has().not().spaces()                           // Should not have spaces

class ResetPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {password: '', confirm_password: '', token: '', error: ''};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.confirmPasswordChange = this.confirmPasswordChange.bind(this);
  }

  componentWillMount() {
    this.setState({token: this.props.match.params.token})
  }

  handleFormSubmit(event) {
    const {history} = this.props;
    event.preventDefault();
    if (this.state.password === this.state.confirm_password && schema.validate(this.state.password)) {
      this.props.resetPassword(this.state, history)
    }
    else {
      this.setState({error: !schema.validate(this.state.password) ? "Check password requirements" : "Passwords didn't match. Try again!"})
    }
  }

  passwordChange(event) {
    this.setState({password: event.target.value})
  }

  confirmPasswordChange(event) {
    this.setState({confirm_password: event.target.value})
  }

  render() {
    if (this.props.isError === "error") {
      return <div>
        Hi there
      </div>
    }
    else if (this.props.status) {
      return (
        <div className="text-center message-page-font">
          <Helmet>
            <style>{'body { background-color: #fff; }'}</style>
          </Helmet>
          <div className="font-type" className="image-height">
            <img className="" src={tick} width="315" height="300" alt=""/>
          </div>
          <h3>Password changed successfully!! </h3>
          <Link to="/auth"><span>Link to follow</span></Link>
        </div>
      )
    }
    else {
      return (
        <div>
          <Navigation/>
          <div className="text-center page-font1">
            <Helmet>
              <style>{'body { background-color: #009BAD; }'}</style>
            </Helmet>
            <img className="icon-height" src={lock} width="350" height="250" alt=""/>
            {this.state.error ? <div>{this.state.error}</div> : null}
            <form className="" onSubmit={this.handleFormSubmit}>
              <div>
                <label>
                  New Password:
                  <input className="input-new" type="password" value={this.state.password}
                         onChange={this.passwordChange}/>
                </label>
              </div>
              <div>
                <label>
                  Confirm Password:
                  <input className="input-confirm" type="password" value={this.state.confirm_password}
                         onChange={this.confirmPasswordChange}></input>
                </label>
              </div>
              <div className="wellStyles">
                <Button className="button-color" bsStyle="danger" bsSize="large" block>
                  Change Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }
}


export default ResetPassword;
