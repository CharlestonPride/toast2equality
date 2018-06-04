import React, { Component } from 'react'
import Section from '../Section/Section'
import './Event.css'

export default class Event extends Component {
  render() {
    return (
      <Section id="about" title="About" desc="">
        
        <h2><a href="#contest">Cocktail Competition</a> to Determine Official Cocktail of <a href="https://www.charlestonpride.org/" rel="noopener noreferrer" target="_blank">Charleston Pride 2018</a>.</h2>
        <h3>Ticket Includes:</h3>
        <p>Complimentary competition samples (1-2 oz) for all attendees as part of your ticket purchase!</p>
        <p><strong>Your</strong> vote determines the official cocktail after you've sampled them all!</p>
        <p>Cash bar on site for additional fun!</p>
        <p><a href="#trucks">Food trucks</a> <strong>&amp;</strong> live entertainment!</p>

        <h1>August 4, 2018 7PM - 11PM</h1>
        <h2>Charleston Visitor Center Bus Shed</h2>
        <h3>375 Meeting St.</h3>
        <h3>Charleston, SC 29403</h3>
        <h3>21+ Only</h3>
      </Section>
    )
  }
}
