import React, { Component } from "react";
import {InputError} from "redux-form"
import "../../static/css/newPassword.css"
import lock from "../../static/img/lock2.gif";
import { Button} from 'reactstrap';
import {Helmet} from 'react-helmet';
import passwordValidator from 'password-validator';


const schema = new passwordValidator();

schema
  .is().min(8)                                    // Minimum length 8
  .is().max(20)                                  // Maximum length 100
  .has().uppercase()                              // Must have uppercase letters
  .has().lowercase()                              // Must have lowercase letters
  .has().digits()                                 // Must have digits
  .has().not().spaces()                           // Should not have spaces
  .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

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
        const { history } = this.props;
        event.preventDefault();
        if(this.state.password === this.state.confirm_password && schema.validate(this.state.password)){
          this.props.resetPassword(this.state,history)
        }
        else{
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
        return (
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
                        <input className="input-new" type="password" value={this.state.password} onChange={this.passwordChange}/>
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


export default ResetPassword;
