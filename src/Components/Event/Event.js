import React, { Component } from 'react'
import Section from '../Section/Section'
import './Event.css'

export default class Event extends Component {
  render() {
    return (
      <Section id="event" title="The Event">
        <h1>August 4, 2018</h1>
        <h1>7PM - 11PM</h1>
        <h2>Charleston Visitor Center Bus Shed</h2>
        <h3>375 Meeting St.</h3>
        <h3>Charleston, SC 29403</h3>
        <h3>21+ Only</h3>
      </Section>
    )
  }
}
