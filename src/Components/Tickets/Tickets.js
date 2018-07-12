import React, { Component } from 'react'
import Section from '../Section/Section'
import './Tickets.css'



export default class Tickets extends Component {
  render() {
    return (
      <Section id="tickets" title="Tickets">
        <div className="center-text">
          <h2>$15 - Online </h2>
          <h2>$20 - At the Door</h2>
          <h2>FREE - <a href="https://www.charlestonpride.org/friends/" rel="noopener noreferrer" target="_blank" >Friends of Pride</a> </h2>
          <h3 className="font-pacifico">What You Get</h3>
          <p><strong>12</strong> Complimentary Sample Tickets</p>
          <p><strong>1</strong> Voting Ticket</p>
          <p>Access to Cash Bar</p>
          <p className="asterisk">Souvenir Cup</p>
          <p className="asterisk">Souvenir Drawstring Bag</p>
          <p><small>Limited to first 1000 attendees</small></p>
        </div>
        <div className="row">
          <iframe id="etapIframe" title="donate" src="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/toast.html"></iframe>
          <script src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js" type="text/JavaScript"></script>
        </div>
      </Section>
    )
  }
}
