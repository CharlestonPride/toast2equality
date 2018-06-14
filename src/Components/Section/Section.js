import React, { Component } from 'react'
import './Section.css'

export default class Section extends Component {
  render() {
    return (
        <div id={this.props.id} className="section-padding">
            <div className="container-fluid text-center">
                <div className="section-title">
                    <h1 className="animated fadeInUp">{this.props.title}</h1>
                    {this.props.desc && this.props.desc.length > 0 && <h4>{this.props.desc}</h4>}
                    <span>
                        <i className="icofont icofont-cocktail" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="col section-content">
                {this.props.children}
                </div>
            </div>
        </div>
    )
  }
}