import React, {Component} from "react"
import _ from "lodash"
import spdf from "simple-react-pdf";
import ss from "../../static/img/pdf/router-interfaces-pod1-14.pdf"


class PdfView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      file: "../../static/img/pdf/router-interfaces-pod1-14.pdf"
    }
  }


  render() {
    const {pdf} = this.props
    const path = "../../static/img/pdf/"
    // const ss = "../../static/img/pdf/router-interfaces-pod1-14.pdf"

    if (!pdf) {
      return (
        <div> Please select Pdf</div>
      )
    }
    return (

      <div>
        <spdf.SimplePDF file="http://inwk01.inwk.dal.ca/diagrams/Router_interfaces_Pod1-14.pdf"/>


      </div>
    )


  }
}


export default PdfView

// { _.find(pdf, (o)=> console.log(o.file))}
