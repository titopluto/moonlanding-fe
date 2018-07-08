import React from "react"
import DangerMessage from "./DangerMessage";
import loader from "../../static/img/loader1.gif";

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
      return <div className="text-center">
        <img src={loader} alt={"loader"} />
      </div>

    }

    return <div>
      {this.state.isDangerActive ? <DangerMessage message={errorMessage} /> : null}
      {children}
    </div>
  }
}

export default MainComponent
