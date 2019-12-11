import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import samplePdf from '../../data/scoresheet2019/p1.1.pdf';

class ScoreSheet extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
      console.log(numPages);
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file={this.props.match}
          onLoadSuccess={this.onDocumentLoadSuccess}
          externalLinkTarget="_blank"
          noData="Scoresheet is not available"
        >        
          {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ),
        )}
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default ScoreSheet;