import React, { Component } from 'react'

export default class Liquor extends Component {
  render(props) {
    return (
        <div className="col-12 col-md-4 col-lg-2 ">
            <div className="">
                <div className="liquor">
                    <img src={this.props.image} alt="Image" className="img-fluid" />
                    <div className="gb-overlay">
                        <div className="overlay-content">
                            <a  className="image-link"><i className="icofont icofont-open-eye"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
