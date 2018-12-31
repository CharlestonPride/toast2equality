import React, { Component } from 'react'
import Section from '../Section/Section'
import './Event.css'

export default class Event extends Component {
  render() {
    return (
      <Section id="contest" title="The Contest" desc="A Cocktail Competition">

      <div className="details">
        <h2>12 Local Bars</h2>
        <p>Serving up complimentary competition samples to all attendees</p>
        <span>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </span>
        <h2>6 Liquors</h2>
        <p>Each bar will be randomly assigned one of the six liquors for their cocktail</p>
        <span>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </span>
        <h2 className="font-pacifico colored">Your Vote</h2>
        <p>You help determine the winner after you've sampled them all!</p>
        <span>
          <i className="fa fa-ticket" aria-hidden="true"></i>
        </span>
        <h2>1 Winner</h2>
        <p>Winning Cocktail will be the Official Cocktail of <a href="https://www.charlestonpride.org/" rel="noopener noreferrer" target="_blank">Charleston Pride 2019</a></p>
        <span>
          <i className="fa fa-trophy" aria-hidden="true"></i>
        </span>
       </div>

        <p>Cash Bar <span className="colored">,</span> <a href="#food">Food</a> <span className="colored">&amp;</span> <a href="#entertainment">Live Entertainment!</a></p>


        <h2 className="font-pacifico colored">June 22, 2019 7pm - 11pm</h2>
        <div className="location">
          <h2>Charleston Visitor Center Bus Shed</h2>
          <h3>375 Meeting St.</h3>
          <h3>Charleston, SC 29403</h3>
          <h3 className="colored">21+ Only</h3>
        </div>
      </Section>
    )
  }
}
