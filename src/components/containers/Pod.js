import React, {Component} from "react"
import {connect} from "react-redux"
import Pod from "../ui/Pod"
import {selectPod, resetActivePod} from "../../actions"
import {bindActionCreators} from "redux"


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      selectPod: selectPod,
      resetActivePod: resetActivePod
    },
    dispatch
  )
}


export default connect(null, mapDispatchToProps)(Pod)
