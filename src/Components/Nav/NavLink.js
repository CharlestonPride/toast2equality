import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavHashLink } from 'react-router-hash-link';

class NavLink extends Component {
  render() {
    return (
      <li className={"nav-item scroll " + this.props.styleName}><NavHashLink className="nav-link" to={this.props.to}>{this.props.children}</NavHashLink></li>
    );
  }
}

NavLink.propTypes = {
  to: PropTypes.string,
  styleName: PropTypes.string

};

export default NavLink;