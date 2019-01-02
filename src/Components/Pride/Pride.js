import React, { Component } from 'react';
import Section from '../Section/Section';
import logo from './sidebar-bg.jpg'
import './Pride.css'

class Pride extends Component {
  render() {
    return (
      <div id="pride" className="section-padding">
        <div className="row">
          <h1>All proceeds benefit:  <a href="https://charlestonpride.org" target="_blank"><img src={logo} /></a></h1>
        </div>
      </div>
    );
  }
}

export default Pride;