import _ from "lodash"
import React, {Component} from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import "../../static/css/pdfStyles.css"
import PdfView from "../containers/DocPdfView"
import MainComponent from "./MainComponent";


class PdfList extends Component {
  constructor(props) {
    super(props)
    this.renderPdfNames = this.renderPdfNames.bind(this)
  }

  componentWillMount() {
    this.props.fetchDocs();
  }

  renderPdfNames(pdf, name) {
    return (
      <button className="list-group-item list-group-item-action"
              key={name}
              onClick={() => this.props.activeDocPdf(pdf['name'])}
              type="button">
        {pdf['name']}
      </button>
    )
  }

  render() {
    return (
      <MainComponent status={this.props.status} errorMessage={this.props.error}>
        <div className="pdf-wrapper">
          <div className="container">
            <div className="pdf-flex-wrapper py-5">
              <div className="pdf-list list-group  mr-auto p-2">
                {_.map(this.props.pdfs, this.renderPdfNames)}
              </div>
              <ReactCSSTransitionGroup transitionName="docTrans"
                                       transitionAppear={true}
                                       transitionAppearTimeout={500}
                                       transitionEnterTimeout={5000}
                                       transitionLeaveTimeout={5000}>
                <div className="pdf-view">
                  <PdfView/>
                </div>
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
      </MainComponent>
    )
  }
}


export default PdfList
