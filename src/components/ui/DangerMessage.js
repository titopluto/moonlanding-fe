import React from "react"
import {Alert} from 'reactstrap';

const DangerMessage = ({message}) => {

  return (
    <div className={"toast"}>
      <Alert color="danger">
        {message}
      </Alert>
    </div>
  )
}

export default DangerMessage
