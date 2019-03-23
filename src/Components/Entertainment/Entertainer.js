import React, { Component } from "react";
import PropTypes from "prop-types";

class Entertainer extends Component {
  render() {
    return (
      <div className="convenience">
        <img className="img-fluid" src={this.props.src} alt={this.props.name} />
        <h1 className="colored">{this.props.name} </h1>
        <h2>{this.props.company}</h2>
      </div>
    );
  }
}

Entertainer.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string
};

export default Entertainer;
