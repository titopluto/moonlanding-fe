import React, { Component } from 'react'
import ReactPDF from 'react-pdf/build/entry.webpack';


import progLab1 from "../../static/img/pdfs/lab_pdfs/programming/lab1.pdf"
import progLab2 from "../../static/img/pdfs/lab_pdfs/programming/lab2.pdf"
import progLab3 from "../../static/img/pdfs/lab_pdfs/programming/lab3.pdf"
import progLab4 from "../../static/img/pdfs/lab_pdfs/programming/lab4.pdf"
import progLab5 from "../../static/img/pdfs/lab_pdfs/programming/lab5.pdf"
import progLab6 from "../../static/img/pdfs/lab_pdfs/programming/lab6.pdf"
import progLab7 from "../../static/img/pdfs/lab_pdfs/programming/lab7.pdf"






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
        if (pdf['id'] === "progLab1") file = progLab1
        else if (pdf['id'] === "progLab2") file = progLab2
        else if (pdf['id'] === "progLab3") file = progLab3
        else if (pdf['id'] === "progLab4") file = progLab4
        else if (pdf['id'] === "progLab5") file = progLab5
        else if (pdf['id'] === "progLab6") file = progLab6
        else if (pdf['id'] === "progLab7") file = progLab7


      return file
  }

  render() {

        const { pageIndex, pageNumber, total } = this.state;
        const { pdf } = this.props
        const pdfFile = this.loadFile()

        return (
          <div className="pdf-view-wrapper">
            <h1 className="pdf-title text-center"> { pdf["id"] } </h1>
            <div className="pdf-view-body">
                <ReactPDF
                    file={pdfFile}
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