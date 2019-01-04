import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./ETapestry.css"

class ETapestry extends Component {
  render() {
    return (
      <div className="etapestry">
        <script type="text/JavaScript" src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js"></script>
        <h1>{this.props.title}</h1>
        <iframe id={"etapIframe-" + this.props.id } title={this.props.id} src={"https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/" + this.props.id+ ".html"}></iframe>
      </div>
    );
  }
}

ETapestry.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ETapestry;