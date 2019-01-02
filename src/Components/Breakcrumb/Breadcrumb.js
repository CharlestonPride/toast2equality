import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './Breadcrumb.css'

class Breadcrumb extends Component {
  render(props) {
    return (
      <div class={"gb-breadcrumb section-before gb-parallax" + this.props.name}>
        <div class="container text-center">
          <div class="breadcrumb-info">
            <ol class="breadcrumb">
              <li class="breadcrumb-item font-pacifico"><Link to="/">Home</Link></li>
              <li class="breadcrumb-item active">{this.props.name}</li>
            </ol>
            <div class="page-title">
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Breadcrumb.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Breadcrumb;