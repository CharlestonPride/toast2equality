import React, { Component } from 'react'
import Section from '../Section/Section'
import './Tickets.css'



export default class Tickets extends Component {
  render() {
    return (
      <Section id="tickets" title="Tickets">
        <div className="container">
          <iframe id="etapIframe" title="donate" src="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/donate.html"></iframe>
          <script src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js" type="text/JavaScript"></script>
        </div>
      </Section>
    )
  }
}
