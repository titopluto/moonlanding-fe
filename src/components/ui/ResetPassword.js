import _ from "lodash"
import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Switch, Route, } from 'react-router-dom';
import { Field, InputError, reduxForm } from "redux-form"

class ResetPassword extends Component {
    
    constructor(props) {
        super(props);
        this.state = {password: '', confirm_password: '', token: ''};
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.confirmPasswordChange = this.confirmPasswordChange.bind(this);
    }

    componentWillMount() {
        this.setState({token: this.props.match.params.token})
    }

    handleFormSubmit(event) {
        const { history } = this.props
        event.preventDefault();
        this.props.resetPassword(this.state)
    }

    passwordChange(event) {
        this.setState({password: event.target.value})
    }
    
    confirmPasswordChange(event) {
        this.setState({confirm_password: event.target.value})
    }
    
    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.handleFormSubmit}>
                    <label>
                        New Password:
                        <input type="password" value={this.state.password} onChange={this.passwordChange}/>
                    </label>
                    <label>
                        Confirm Password:
                        <input type="password" value={this.state.confirm_password}  onChange={this.confirmPasswordChange}></input>
                    </label>
                    <button type="submit" > Reset Password </button>
                </form>
            </div>
        )
    }
}


export default ResetPassword;