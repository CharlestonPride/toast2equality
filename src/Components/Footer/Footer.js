import React, { Component } from 'react'
import './Footer.css'
import logo from './logo_c.png'
export default class Footer extends Component {
  render() {
    return (

        <footer >
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-3">
                        <a href="#home"><img className="img-fluid" src={logo} alt="Logo" /></a>
                    </div>
                    <div className="col-md-6">
                        <strong>Toast to Equality</strong>
                        <p>&copy; Copyright 2018 <a target="_blank" rel="noopener noreferrer" href="https://charlestonpride.org">Charleston Pride Festival, Inc. </a>  All Rights Reserved.</p>
                        <p>Charleston Pride Festival, Inc. is a 501(c)(3) public charity under the Internal Revenue Service Code of 1986 and the State of South Carolina.</p>
                    </div>
                    <div className="col-md-3">
                        <p><strong>Questions/Comments?</strong></p>
                        <p><a href="mailto:toast@charlestonpride.org">toast@charlestonpride.org</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}
