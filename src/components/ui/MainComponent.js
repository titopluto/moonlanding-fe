import React from "react"
import DangerMessage from "./DangerMessage";
import loader from "../../static/img/loader.gif";

class MainComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDangerActive: false
    }
  }

  componentDidMount() {
    if (this.props.status === "ERROR") {
      this.setState({
        isDangerActive: true
      })
      setTimeout(() => {
        this.setState({
          isDangerActive: false
        }, 5000)
      })
    }
  }

  render() {
    const {status, children, errorMessage} = this.props
    if (status === "LOADING") {
      return <img src={loader} alt={"loader"} />
    }

    return <div>
      {this.state.isDangerActive ? <DangerMessage message={errorMessage} /> : null}
      {children}
    </div>
  }
}

export default MainComponent
