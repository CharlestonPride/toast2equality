import React, { Component } from 'react';
import './Winner.css'
import logo from './eljefe.jpg'
import trophy from './trophy.jpg'
import jay from './eljefe_jay.jpg'

class Winner extends Component {
  render() {
    return (
      <div id="winner" className=" section-padding text-center">
      <div className="section-title">
          <h1>Congratulations to Our Winner</h1>
      </div>
      <div className="container text-center">
      <div className="row">
              <div className="col-md-4">
                  <div className="convenience">
                      <img src={jay} alt="Jay of El Jefe"/>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="convenience">
                  <img src={logo} alt="El Jefe Logo"/>
                  <h1 className="colored">The Naughty Pool Boy</h1>
                      <h2>The Official Cocktail of Charleston Pride 2018</h2>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="convenience">
                      <img src={trophy} alt="trophy"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default Winner;