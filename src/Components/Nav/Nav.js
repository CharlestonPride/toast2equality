import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
        <div className="gb-menu">
            <nav className="navbar fixed-top navbar-toggleable-md">
                <div className="container">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand" href="index-onepage1.html"><img className="img-fluid" src="images/logo.png" alt="Logo" /></a>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav onepage-nav">
                            <li className="nav-item scroll active"><a className="nav-link" href="#home">Home</a> </li>
                            <li className="nav-item scroll"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#food-menu">Menu</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#reservation">Reservation</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#gallery">Gallery</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#blog">Blog</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}
