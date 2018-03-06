import _ from "lodash"
import React, { Component } from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import "../../static/css/pdfStyles.css"
import LabPdfView from "../containers/LabPdfView"


class PdfList extends Component {
    constructor(props) {
        super(props)
        this.renderPdfItems = this.renderPdfItems.bind(this)
    }

    renderPdfItems(pdf, name) {
        const collapseId = pdf["name"].split(" ").join("")
        const headingId = `${pdf["name"].split(" ").join("")}Heading`
        return (
          <div key={pdf["name"]} className="card">
            <div className="card-header" role="tab" id={headingId}>
              <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#accordion" href={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
                  { pdf["name"]}
                </a>
              </h5>
            </div>

            <div id={collapseId} className="collapse" role="tabpanel" aria-labelledby={headingId}>
              <div className="card-block">
                  { _.map(pdf["labs"], lab =>
                      <button className="list-group-item list-group-item-action"
                            key={lab["name"]}
                            onClick={()=>this.props.activeLabPdf(lab)}
                            type="button" >
                            { lab['name'] }
                      </button>
                   ) }

              </div>
            </div>
          </div>
        )
    }

    render() {
        return (
            <div className="pdf-wrapper">
                <div className="container">
                    <div className="pdf-flex-wrapper py-5">
                        <div id="accordion" className="mr-auto p-2" role="tablist" aria-multiselectable="true">
                            { _.map(this.props.pdfs, this.renderPdfItems) }
                        </div>
                        <ReactCSSTransitionGroup transitionName="docTrans"
                                                 transitionAppear={true}
                                                 transitionAppearTimeout={500}
                                                 transitionEnterTimeout={5000}
                                                 transitionLeaveTimeout={5000} >
                            <div className="pdf-view">
                                <LabPdfView/>
                            </div>
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </div>
        )
    }
}


export default PdfList
