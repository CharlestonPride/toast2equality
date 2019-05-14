import React, { Component } from "react";
import "./PresentedBy.css";
import blackbaud from "./BlackbaudLogo_BlackbaudGreen.png";
class PresentedBy extends Component {
  render() {
    return (
      <div id="presentedBy" className="text-center">
        <h2 data-animation="animated fadeInDown">Presented By</h2>
        <img className="img-fluid" src={blackbaud} alt="Blackbaud logo" />
      </div>
    );
  }
}

export default PresentedBy;
