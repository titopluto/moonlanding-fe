import React, { Component } from 'react'
import {Document, Page} from 'react-pdf';


class PdfView extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = (x) => {
        this.setState({ numPages: x.numPages });
    }

  render() {
    const { pdf, selected } = this.props

    if (!selected)  {
        return null
    }
    const { pageNumber, numPages } = this.state;
    const selectedFile = pdf.find(p => p.name === selected)
    const fileName = `http://inwk01.inwk.dal.ca/diagrams/${selectedFile.file}.pdf`

    return (
      <Document file={fileName} onLoadSuccess={this.onDocumentLoad}>
        <Page pageNumber={pageNumber} />
      </Document>
    )
  }
}

export default PdfView