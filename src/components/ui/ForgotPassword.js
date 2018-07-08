import React, {Component} from "react";
import {Field, InputError, reduxForm} from "redux-form";
import mail from "../../static/img/mail21.gif";
import tick from "../../static/img/mail11.gif";
import "../../static/css/ForgotPasswordStyles.css"
import {Button} from 'reactstrap';
import {Helmet} from 'react-helmet';
import Navigation from "../containers/Navigation"
import MainComponent from "./MainComponent";


class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {email: ''};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.emailChange = this.emailChange.bind(this);
  }

  handleFormSubmit(event) {
    const {history} = this.props
    event.preventDefault();
    this.props.forgotPassword(this.state)
  }

  emailChange(event) {
    this.setState({email: event.target.value})
  }

  render() {
    return <MainComponent status={this.props.status} errorMessage={this.props.error}>
      {this.props.sentStatus ? (
        <div className="text-center message-page-font">
          <Helmet>
            <style>{'body { background-color: #fff; }'}</style>
          </Helmet>
          <div className="font-type" className="image-height">
            <img className="" src={tick} width="315" height="300" alt=""/>
          </div>
          <h3>Email successfully sent!! Please check your mail</h3>
        </div>
      ) : (
        <div>
          <Navigation/>
          <div className="text-center page-font">
            <Helmet>
              <style>{'body { background-color: #D5D8DE; }'}</style>
            </Helmet>
            <div className="font-type" className="textCenter1">
              <img className="" src={mail} width="230" height="180" alt=""/>
            </div>
            <div className="heading-1">Forgot your Password?</div>
            <div className="heading-2">No need to worry!! To reset your password Lorem epsum</div>
            <div className="inputStyles">
              <form className="" onSubmit={this.handleFormSubmit}>
                <label>
                  <input className="input-box" type="text" value={this.state.email} placeholder="netid@dal.ca"
                         onChange={this.emailChange}/>
                </label>
                <div className="well wellStyles">
                  <Button className="button-color" bsStyle="danger" bsSize="large" block>
                    Send reset link
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
      }
    </MainComponent>

  }
}


export default ForgotPassword;
