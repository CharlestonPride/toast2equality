import React, { Component } from 'react';
import logo from './sidebar-bg.jpg'
import './Pride.css'

class Pride extends Component {
  render() {
    return (
      <div id="pride" className="section-padding">
        <div className="row">
          <h1>All proceeds benefit:</h1>
          <a href="https://charlestonpride.org" target="_blank" rel="noopener noreferrer" ><img className="img-fluid" src={logo} alt="charleston pride logo"/></a>
        </div>
      </div>
    );
  }
}

export default Pride;