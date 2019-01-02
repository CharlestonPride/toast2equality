import React, { Component } from 'react';
import gal1 from './gal1.jpg'
import './Gallery.css'

class Gallery extends Component {
  render() {
    return (
      <div id="gallery">
        <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-4 col-lg-2">
            <img className="img-fluid" src={gal1}></img>
          </div>
          <div className="col-md-4 col-lg-2">
            <img className="img-fluid" src={gal1}></img>
          </div>
          <div className="col-md-4 col-lg-2">
            <img className="img-fluid" src={gal1}></img>
          </div>
          <div className="col-md-4 col-lg-2">
            <img className="img-fluid" src={gal1}></img>
          </div>
          <div className="col-md-4 col-lg-2">
            <img className="img-fluid" src={gal1}></img>
          </div>
          <div className="col-md-4 col-lg-2">
            <img className="img-fluid" src={gal1}></img>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Gallery;