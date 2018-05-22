import React, { Component } from 'react'
import './Hero.css';
import logo from './logo.svg'

export default class Hero extends Component {
  render() {
    return (
        <div id="home" className="gb-banner banner-one section-before">
            <div className="container">
                <div className="banner-info">
                    <h1 className="font-pacifico" data-animation="animated fadeInDown">Let's</h1>
                    <img src={logo} className="img-fluid" />
                    <p data-animation="animated fadeInDown">Add some tagline here, like 12 bars, 1 winner</p>
                    <div className="buttons" data-animation="animated fadeInDown">
                        <a href="#" className="btn btn-primary">Explore Now</a>
                        <a href="#" className="btn btn-primary button-reserve">Get Tickets</a>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
