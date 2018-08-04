import React, {Component} from "react"
import {connect} from "react-redux"
import {Field, reduxForm} from "redux-form"
import {loginUser} from "../../../actions"
import {NavLink} from 'react-router-dom'
import "../../../static/css/loginStyles.css"

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.alertError = this.alertError.bind(this)
  }

  required = value => value ? undefined : 'Required'

  renderField = ({input, label, type, placeholder, meta: {touched, error, warning}}) => {
    return (
      <div>
        <label className="sr-only" htmlFor="inlineFormInput"> {label} </label>
        <input {...input} className="form-control mb-2 mr-sm-2 mb-sm-0"
               id={label}
               placeholder={placeholder}
               type={type}/>
        {touched && ((error &&
          <span className="small error">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    )

  }

  handleFormSubmit({email, password}) {
    const {history} = this.props
    // console.log(email, password)
    this.props.loginUser({email, password}, history)
  }

  alertError() {
    const {authErrorMessage} = this.props
    // console.log("cc", authErrorMessage)
    if (authErrorMessage) {
      return <div className="alert-danger"> {authErrorMessage} </div>
    }
  }

  render() {
    const {handleSubmit} = this.props
    return (
      <section className="login-section">
        <div className="jumbotron jumbotron-fluid text-white">
          <div className="container ">
            <div className="row justify-content-center">
              <p className="heading"> Welcome to the Internetworking Web Portal</p>
            </div>
            <div className="row justify-content-center">
              <small> {this.alertError()} </small>
            </div>

            <div className="row justify-content-center">
              <form className="form-inline" onSubmit={handleSubmit(this.handleFormSubmit)}>
                <Field name="email"
                       label="email"
                       type="text"
                       placeholder="netid@dal.ca"
                       component={this.renderField}
                       validate={this.required}
                />
                <Field name="password"
                       label="password"
                       type="password"
                       placeholder="password"
                       component={this.renderField}
                       validate={this.required}
                />

                <button type="submit" className="btn btn-warning btn-font"> Access</button>
              </form>
            </div>
            <div className="forgot-password">
              <NavLink className="forgot-password" to="/forgotPassword">
                Forgot Password
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => (
  {authErrorMessage: state.auth.error}
)


Login = connect(mapStateToProps, {loginUser})(Login)

export default reduxForm({
  form: "login"
})(Login)
