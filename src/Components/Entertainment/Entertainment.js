import React, { Component } from 'react'
import './Entertainment.css';

export default class Entertainment extends Component {
  render() {
    return (
        <div id="entertainment" className="gb-convenience section-before section-padding gb-parallax">
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="convenience">
                            <span className="icon"><i className="icofont icofont-microphone"></i></span>
                            <h1>MC</h1>
                            <h2>Mike Edwards </h2>
                            <h3>Mix 95.9 Two Girls &amp; a Guy</h3>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="convenience">
                            <span className="icon"><i className="icofont icofont-retro-music-disk"></i></span>
                            <h1>Music</h1>
                            <h2>DJ Trevor D</h2>
                            <h3>D&amp;M Productions</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
