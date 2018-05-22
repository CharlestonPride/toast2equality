import React, { Component } from 'react'
import Bar from './Bar'

export default class Bars extends Component {
  render() {
    return (
    <div>
            <div className="gb-cta section-padding section-before gb-parallax">
                <div className="container text-center">
                    <div className="cta-info">
                        <h1 className="font-pacifico">A warm welcome to Jalebi Restuarent !</h1>
                        <h2>We serve a variety of snacks and meals. Ready to book your table?</h2>
                        <a href="#" className="btn btn-primary">Book Your Table Now</a>
                    </div>
                </div>
            </div>
        <div class="bars section-padding">
                <div class="container text-center">
                <h1 className="font-pacifico">The Contestants</h1>
                <div id="bars-content" class="food-menu">
                    <Bar/>
                    <Bar/>
                    <Bar/>
                    <Bar/>
                </div>
            </div>
        </div>

    </div>
    )
  }
}
