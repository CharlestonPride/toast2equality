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
                <h1>The Entertainment</h1>
                <h4>Details Coming Soon</h4>
            </div>
        </div>
    )
  }
}
