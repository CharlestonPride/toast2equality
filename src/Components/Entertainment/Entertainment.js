import React, { Component } from 'react'
import './Entertainment.css';
import Guitar from './guiter.svg'
import Microphone from './microphone-alt.svg'
import Disc from './retro-music-disk.svg'

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
                            <img src={Disc} alt="disc"/>
                            <h1>DJ Trevor D</h1>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="convenience">
                            <img src={Microphone} alt="microphone" />
                            <h1>MC Mike Edwards </h1>
                            <h2>Mix 95.9</h2>
                            <h2>Two Girls &amp; a Guy</h2>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="convenience">
                            <img src={Guitar} alt="guitar"/>
                            <h1>Live Bands</h1>
                            <h2>Jump Castle Riot</h2>
                            <h2>Bender Funk</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
