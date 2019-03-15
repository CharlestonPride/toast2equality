import React, { Component } from "react";
import "./Entertainment.css";
import Guitar from "./guiter.svg";
import Disc from "./retro-music-disk.svg";
import Mic from "./microphone-alt.svg";
import Radio from "./radio-mic.svg";

export default class Entertainment extends Component {
  render() {
    return (
      <div
        id="entertainment"
        className="gb-convenience section-padding gb-parallax text-center"
      >
        <div className="section-title">
          <h1>The Entertainment</h1>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6">
              <div className="convenience">
                <img src={Radio} alt="radio microphone" />
                <h1>MC Mike Edwards </h1>
                <h2>Mix 95.9</h2>
                <h2>Two Girls &amp; a Guy</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="convenience">
                <img src={Disc} alt="disc" />
                <h1>DJ Trevor D</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="convenience">
                <img src={Guitar} alt="guitar" />
                <h1>Bender Funk</h1>
              </div>
            </div>

            <div className="col-md-6">
              <div className="convenience">
                <img src={Mic} alt="guitar" />
                <h1>Bizness Suit</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
