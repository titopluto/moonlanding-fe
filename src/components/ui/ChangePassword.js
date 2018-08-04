import React, {Component} from "react";
import {Link} from 'react-router-dom'

import lock from "../../static/img/save.gif";
import tick from "../../static/img/tick.gif";
import {Helmet} from 'react-helmet';
import passwordValidator from 'password-validator';
import "../../static/css/ChangePasswordStyles.css"
import {Button} from 'reactstrap';
import MainComponent from "./MainComponent";


const schema = new passwordValidator();

schema
  .is().min(4)                                    // Minimum length 8
  .has().not().spaces()                           // Should not have spaces

class ChangePassword extends Component {

  constructor(props) {
    super(props);
    this.state = {old_password: '', new_password: '', confirm_password: '', error: ''};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.oldPasswordChange = this.oldPasswordChange.bind(this);
    this.newPasswordChange = this.newPasswordChange.bind(this);
    this.confirmPasswordChange = this.confirmPasswordChange.bind(this);
  }

  componentWillMount(){
    this.props.resetChangePassword()
  }

  handleFormSubmit(event) {
    const {history} = this.props
    console.log(this.state,"check state")
    event.preventDefault();

    if (this.state.new_password === this.state.confirm_password && schema.validate(this.state.new_password)) {
      this.props.changePassword(this.state, history)
    }
    else {
      console.log(schema.validate(this.state.new_password,"wats in it"))

      this.setState({error: !schema.validate(this.state.new_password) ? "Check password requirements" : "Passwords didn't match. Try again!"})
    }
  }

  oldPasswordChange(event) {
    this.setState({old_password: event.target.value})
  }

  newPasswordChange(event) {
    this.setState({new_password: event.target.value})
  }

  confirmPasswordChange(event) {
    this.setState({confirm_password: event.target.value})
  }

  render() {
      return <MainComponent status={this.props.status} errorMessage={this.props.error}>
        {
          this.props.resetState ? (
            <div className="text-center message-page-font">
              <Helmet>
                <style>{'body { background-color: #fff; }'}</style>
              </Helmet>
              <div className="font-type" className="image-height">
                <img className="" src={tick} width="315" height="300" alt=""/>
              </div>
              <h3>Password changed Success</h3>
              <Link to="/auth"><span>Link to follow</span></Link>
            </div>
          ) : (
            <div className="text-center page-font-confirm">
              <Helmet>
                <style>{'body { background-color: #53C0BC; }'}</style>
              </Helmet>
              <img className="" src={lock} width="350" height="270" alt=""/>
              {this.state.error ? <div>{this.state.error}</div> : null}
              <div>
                <label>
                  Current Password:
                  <input className="input-current" type="password" value={this.state.old_password}
                         onChange={this.oldPasswordChange}/>
                </label>
              </div>
              <div>
                <label>
                  New Password:
                  <input className="input-new" type="password" value={this.state.new_password}
                         onChange={this.newPasswordChange}></input>
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
                <Button className="button-color" block onClick={this.handleFormSubmit}>
                  Change Password
                </Button>
              </div>

            </div>
          )
        }
      </MainComponent>
  }
}


export default ChangePassword;
