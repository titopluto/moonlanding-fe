import _ from "lodash"
import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Switch, Route, } from 'react-router-dom';
import { Field, InputError, reduxForm } from "redux-form"

class ForgotPassword extends Component {
    
    constructor(props) {
        super(props);
        this.state = {email: ''};
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.emailChange = this.emailChange.bind(this);
    }

    handleFormSubmit(event) {
        const { history } = this.props
        event.preventDefault();
        this.props.forgotPassword(this.state)
    }

    emailChange(event) {
        this.setState({email: event.target.value})
    }
    
    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.handleFormSubmit}>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.emailChange}/>
                    </label>
                    <button type="submit" > Send Reset Link </button>
                </form>
            </div>
        )
    }
}


export default ForgotPassword;