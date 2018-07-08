import React from 'react';
import PDF from 'react-pdfjs';
import spdf from "simple-react-pdf";
import {Row, Container} from "reactstrap"


import labguide from "../../../static/img/pdf/labguide.pdf"

import routerIntPod1_14 from "../../../static/img/pdf/router-interfaces-pod1-14.pdf"
import routerIntPod15_20 from "../../../static/img/pdf/router-interfaces-pod15-20.pdf"

import switchConnectPod1_14 from "../../../static/img/pdf/switch-port-connection-pod1-14.pdf"
import switchConnectPod15_20 from "../../../static/img/pdf/switch-port-connection-pod15-20.pdf"

import defaultWiringPod1_14 from "../../../static/img/pdf/default-wiring-pod1-14.pdf"
import defaultWiringPod15_20 from "../../../static/img/pdf/default-wiring-pod15-20.pdf"

import analyzerConnectPod1_14 from "../../../static/img/pdf/analyser-connection-pod1-14.pdf"
import analyzerConnectPod15_20 from "../../../static/img/pdf/analyser-connection-pod15-20.pdf"

import snifferWsIP from "../../../static/img/pdf/sniffer-ws-ip.pdf"


import ReactPDF from 'react-pdf';

class PdfViewer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {doc: analyzerConnectPod1_14}
    this.changeDoc = this.changeDoc.bind(this)
  }

  changeDoc(doc) {
    this.setState({doc})
  }


  render() {
    const a = this.props.doc

    console.log(a)
    return (
      <Container>
        {/*{console.log}*/}
        <Row>
          <div className="col-4">
            <div className="list-group doc-list">
              <button type="button" onClick={() => this.changeDoc(routerIntPod1_14)}
                      className="list-group-item list-group-item-warning">
                Router Inferfaces Pod 1 to 14
              </button>
              <button type="button" onClick={() => this.changeDoc(routerIntPod15_20)}
                      className="list-group-item list-group-item-warning">
                Router Inferfaces Pod 15 to 20
              </button>
              <button type="button" onClick={() => this.changeDoc(switchConnectPod1_14)}
                      className="list-group-item list-group-item-warning">
                switch Connection Pod 1 to 14
              </button>
              <button type="button" onClick={() => this.changeDoc(switchConnectPod15_20)}
                      className="list-group-item list-group-item-warning">
                switch Connection Pod 15 to 20
              </button>
              <button type="button" onClick={() => this.changeDoc(analyzerConnectPod1_14)}
                      className="list-group-item list-group-item-warning">
                Analyzer Connection Pod1 to 14
              </button>
              <button type="button" onClick={() => this.changeDoc(analyzerConnectPod15_20)}
                      className="list-group-item list-group-item-warning">
                Analyzer Connection Pod15 to 20
              </button>
              <button type="button" onClick={() => this.changeDoc(defaultWiringPod1_14)}
                      className="list-group-item list-group-item-warning">
                Default Wiring Pod1 to 14
              </button>
              <button type="button" onClick={() => this.changeDoc(defaultWiringPod15_20)}
                      className="list-group-item list-group-item-warning">
                Default Wiring Pod15 to 20
              </button>

              <button type="button" onClick={() => this.changeDoc(snifferWsIP)}
                      className="list-group-item list-group-item-warning">
                Sniffer WorkStation IPs
              </button>

            </div>
          </div>

          <div className="col-8">
            <spdf.SimplePDF file={this.state.doc}/>

          </div>
        </Row>
      </Container>


    )
  }
}

export default PdfViewer
