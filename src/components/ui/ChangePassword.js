import _ from "lodash"
import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Switch, Route, } from 'react-router-dom';
import { Field, InputError, reduxForm } from "redux-form"

class ChangePassword extends Component {
    
    constructor(props) {
        super(props);
        this.state = {old_password: '', new_password: '', confirm_password: ''};
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.oldPasswordChange = this.oldPasswordChange.bind(this);
        this.newPasswordChange = this.newPasswordChange.bind(this);
        this.confirmPasswordChange = this.confirmPasswordChange.bind(this);
    }

    handleFormSubmit(event) {
        const { history } = this.props
        event.preventDefault();
        this.props.changePassword(this.state)
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
            <div>
                <form className="form-inline" onSubmit={this.handleFormSubmit}>
                    <label>
                        Current Password:
                        <input type="password" value={this.state.old_password} onChange={this.oldPasswordChange}/>
                    </label>
                    <label>
                        New Password:
                        <input type="password" value={this.state.new_password} onChange={this.newPasswordChange}></input>
                    </label>
                    <label>
                        Confirm Password:
                        <input type="password" value={this.state.confirm_password}  onChange={this.confirmPasswordChange}></input>
                    </label>
                    <button type="submit" > Change Password </button>
                </form>
            </div>
        )
    }
}


export default ChangePassword;