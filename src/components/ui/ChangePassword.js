import React, { Component } from "react";
import { Field, InputError, reduxForm } from "redux-form"
import lock from "../../static/img/save.gif";
import {Helmet} from 'react-helmet';
import passwordValidator from 'password-validator';
import "../../static/css/ChangePasswordStyles.css"
import { Button} from 'reactstrap';


const schema = new passwordValidator();

schema
  .is().min(8)                                    // Minimum length 8
  .is().max(20)                                  // Maximum length 100
  .has().uppercase()                              // Must have uppercase letters
  .has().lowercase()                              // Must have lowercase letters
  .has().digits()                                 // Must have digits
  .has().not().spaces()                           // Should not have spaces
  .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {old_password: '', new_password: '', confirm_password: '',error: ''};
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.oldPasswordChange = this.oldPasswordChange.bind(this);
        this.newPasswordChange = this.newPasswordChange.bind(this);
        this.confirmPasswordChange = this.confirmPasswordChange.bind(this);
    }

    handleFormSubmit(event) {
        const { history } = this.props
        event.preventDefault();
        console.log(schema.validate(this.state.new_password),"gkuhdf;gh;fhghfs'")
        if(this.state.new_password === this.state.confirm_password && schema.validate(this.state.new_password)){
          this.props.changePassword(this.state,history)
        }
        else{
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
        return (
            <div className="text-center page-font-confirm">
              <Helmet>
                <style>{'body { background-color: #53C0BC; }'}</style>
              </Helmet>
              <img className="" src={lock} width="350" height="270" alt=""/>

              <form className="" onSubmit={this.handleFormSubmit}>
                <div>
                  <label>
                    Current Password:
                    <input className="input-current" type="password" value={this.state.old_password} onChange={this.oldPasswordChange}/>
                  </label>
                </div>
                <div>
                  <label>
                    New Password:
                    <input className="input-new" type="password" value={this.state.new_password} onChange={this.newPasswordChange}></input>
                  </label>
                </div>
                <div>
                  <label>
                    Confirm Password:
                    <input className="input-confirm" type="password" value={this.state.confirm_password}  onChange={this.confirmPasswordChange}></input>
                  </label>
                </div>
                <div className="wellStyles">
                  <Button className="button-color" bsStyle="danger" bsSize="large" block >
                    Change Password
                  </Button>
                </div>
                </form>
            </div>
        )
    }
}


export default ChangePassword;
