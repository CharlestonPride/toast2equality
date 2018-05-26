import React, { Component } from 'react'

export default class Liquor extends Component {
  render(props) {
    return (
        <div className="col-6 col-md-4 col-lg-2">
            <div className="liquor">
                <img src={this.props.image} className="img-fluid" />
                <div className="gb-overlay">
                    <div className="overlay-content">
                        <div className="row">
                            <h3 className="align-middle" >{this.props.name}</h3>
                        </div>
                        <div className="row">
                            <a href={this.props.url} target="_blank"><i className="icofont icofont-web"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
