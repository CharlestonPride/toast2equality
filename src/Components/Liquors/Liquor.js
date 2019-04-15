import React, { Component } from "react";

export default class Liquor extends Component {
  render(props) {
    const utm =
      "?utm_source=charleston_pride&utm_medium=toast_to_equality&utm_campaign=sponsors";
    return (
      <div className="col-12 col-md-4">
        <div className="liquor">
          <img
            src={this.props.image}
            alt={this.props.name + " logo"}
            className="img-fluid"
          />
          <div className="gb-overlay">
            <div className="overlay-content">
              <div className="row">
                <div className="col">
                  <h3 className="align-middle">{this.props.name}</h3>
                </div>
              </div>
              <div className="row">
                <a
                  href={this.props.url + utm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-globe" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
