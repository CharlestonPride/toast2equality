import React, { Component } from 'react'
import './Contest.css';

export default class Contest extends Component {
  render() {
    return (
        <div id="about" className="gb-about section-padding">
            <div className="container text-center">
                <div className="section-title">
                    <h1 className="font-pacifico">The Contest</h1>
                    <h2>6 Liquors</h2>
                    <span>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </span>
                    <h2>12 Local Bars</h2>
                    <span>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </span>
                    <h2 className="font-pacifico colored">Your Vote</h2>
                    <span>
                        <i className="fa fa-ticket" aria-hidden="true"></i>
                    </span>
                    <h2>1 Winner</h2>
                    <span>
                        <i className="fa fa-trophy" aria-hidden="true"></i>
                    </span>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </p>
                </div>
            </div>
        </div>
    )
  }
}
