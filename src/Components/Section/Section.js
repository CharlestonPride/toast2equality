import React, { Component } from 'react'
import './Section.css'

export default class Section extends Component {
  render() {
    return (
        <div id={this.props.id} className="section-padding">
            <div className="container-fluid text-center">
                <div className="section-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="col section-content">
                {this.props.children}
                </div>
            </div>
        </div>
    )
  }
}
