import React, { Component } from 'react'
import ReactPDF from 'react-pdf/build/entry.webpack';


import labguide from "../../static/img/pdfs/doc_pdfs/labguide.pdf"
import routerIntPod1_14 from "../../static/img/pdfs/doc_pdfs/router-interfaces-pod1-14.pdf"
import routerIntPod15_20 from "../../static/img/pdfs/doc_pdfs/router-interfaces-pod15-20.pdf"
import switchConnectPod1_14 from "../../static/img/pdfs/doc_pdfs/switch-port-connection-pod1-14.pdf"
import switchConnectPod15_20 from "../../static/img/pdfs/doc_pdfs/switch-port-connection-pod15-20.pdf"
import defaultWiringPod1_14 from "../../static/img/pdfs/doc_pdfs/default-wiring-pod1-14.pdf"
import defaultWiringPod15_20 from "../../static/img/pdfs/doc_pdfs/default-wiring-pod15-20.pdf"
import analyzerConnectPod1_14 from "../../static/img/pdfs/doc_pdfs/analyser-connection-pod1-14.pdf"
import analyzerConnectPod15_20 from "../../static/img/pdfs/doc_pdfs/analyser-connection-pod15-20.pdf"
import snifferWsIP from "../../static/img/pdfs/doc_pdfs/sniffer-ws-ip.pdf"

import { MdArrowBack, MdArrowForward } from "react-icons/lib/md"


class PdfView extends Component {
  state = {
    // file: null,
    pageIndex: null,
    pageNumber: null,
    total: null,
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  onDocumentLoad = ({ total }) => {
    this.setState({ total });
  }

  onPageLoad = ({ pageIndex, pageNumber }) => {
    this.setState({ pageIndex, pageNumber });
  }

  changePage(by) {
    this.setState(prevState => ({
      pageIndex: prevState.pageIndex + by,
    }));
  }

  loadFile() {
      const { pdf } = this.props
      let file = null
        if (!pdf) return file
        if (pdf['name'] === "Router Inferfaces Pod 1 to 14") file = routerIntPod1_14
        else if (pdf['name'] === "Router Inferfaces Pod 15 to 20") file = routerIntPod15_20
        else if (pdf['name'] === "Switch Connection Pod 1 to 14") file = switchConnectPod1_14
        else if (pdf['name'] === "Switch Connection Pod 15 to 20") file = switchConnectPod15_20
        else if (pdf['name'] === "Default Wiring Pod 1 to 14") file = defaultWiringPod1_14
        else if (pdf['name'] === "Default Wiring Pod 15 to 20") file = defaultWiringPod15_20
        else if (pdf['name'] === "Analyzer Connection Pod 1 to 14") file = analyzerConnectPod1_14
        else if (pdf['name'] === "Analyzer Connection Pod 15 to 20") file = analyzerConnectPod15_20
        else if (pdf['name'] === "Sniffer and WorkStation IP Addresses") file = snifferWsIP
        else if (pdf['name'] === "Laboratory Guide") file = labguide

      return file
  }

  render() {

        const { pageIndex, pageNumber, total } = this.state;
        const { pdf } = this.props
        const pdfFile = this.loadFile()

        return (
          <div className="pdf-view-wrapper">
            <h1 className="pdf-title text-center"> { pdf["name"] } </h1>
            <div className="pdf-view-body">
                <ReactPDF
                    file={"http://localhost:8000/media/labManuals/lab1.pdf"}
                    onDocumentLoad={this.onDocumentLoad}
                    onPageLoad={this.onPageLoad}
                    pageIndex={pageIndex}
                    width={700}
                    noData={<h1 className="pdf-title text-center"> Please select a documentation to view </h1>}/>
            </div>
                {
                    pageNumber > 0 &&
                      <div className="pdf-view-footer text-center ">
                        <MdArrowBack size={50}
                          disabled={pageNumber <= 1}
                          onClick={() => this.changePage(-1)}/>

                          <span> Page {pageNumber || '--'} of {total || '--'} </span>

                        <MdArrowForward size={50}
                          disabled={pageNumber >= total}
                          onClick={() => this.changePage(1)}/>
                      </div>
                }
            </div>
            );
          }
}

export default PdfView