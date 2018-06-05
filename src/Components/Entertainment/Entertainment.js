import React, { Component } from 'react'
import './Entertainment.css';

export default class Entertainment extends Component {
  render() {
    return (
        <div id="entertainment" className="gb-convenience section-padding gb-parallax text-center">
            <div className="section-title">
                <h1>Entertainment</h1>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="convenience">
                            <span className="icon"><i className="icofont icofont-retro-music-disk"></i></span>
                            <h1>DJ Trevor D</h1>
                            <h2></h2>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="convenience">
                            <span className="icon"><i className="icofont icofont-microphone"></i></span>
                            <h1>MC Mike Edwards </h1>
                            <h2>Mix 95.9 Two Girls &amp; a Guy</h2>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="convenience">
                            <span className="icon"><i className="icofont icofont-guiter"></i></span>
                            <h1>Live Bands</h1>
                            <h2></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
