import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Break.css";

class Break extends Component {
  render() {
    return (
      <div
        id={this.props.sid}
        className=" break gb-convenience section-padding gb-parallax text-center"
      >
        {this.props.children}
      </div>
    );
  }
}

Break.propTypes = {
  sid: PropTypes.string.isRequired
};

export default Break;
