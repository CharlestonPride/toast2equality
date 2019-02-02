import React, { Component } from 'react'
import Section from '../Section/Section'
import './Tickets.css'
import ETapestry from '../ETapestry/ETapestry';

export default class Tickets extends Component {

  GeneralAdmission(props) {
    return (
      <div className="card">
        <div className="card-header">
          <h2>General Admission</h2>
        </div>
        <div className="card-body">
          <h2>$15 - Online </h2>
          <h2>$20 - At the Door</h2>
          <h3 className="font-pacifico">What You Get</h3>
          <ul>
            <li><strong>24</strong> Complimentary Sample Tickets</li>
            <li><strong>1</strong> Vote</li>
            <li>Access to Cash Bar</li>
            <li className="asterisk">Souvenir Cup</li>
            <li className="asterisk">Souvenir Drawstring Bag</li>
            <li className="asterisk">Toast To Equality Program</li>
          </ul>
        </div>
        <div className="card-footer text-muted">
          <p><small>Limited to first 1000 attendees</small></p>
        </div>
      </div>)
  }

  Vip(props) {
    return (
      <div className="card vip">
        <div className="card-header">
          <h2>VIP</h2>
        </div>
        <div className="card-body">
          <h2>$50 - Online </h2>
          <h2>FREE - <a href="https://www.charlestonpride.org/friends-of-pride/" rel="noopener noreferrer" target="_blank" >Friends of Pride</a> </h2>
          <h3 className="font-pacifico">What You Get</h3>
          <ul className="list-unstyled">
            <li> General Admission</li>
            <li><i className="fa fa-plus colored" aria-hidden="true"></i></li>
            <li>Access to <strong>VIP Paradise</strong></li>
            <li><em>Includes Open Bar and Catering</em></li>
            <li>Limited number of tickets available</li>
          </ul>
        </div>
        <div className="card-footer text-white">
          <p><small>Friends of Pride: send us an <a href="mailto:info@toasttoequality.comsubject=Friend of Pride Reservation">email</a> to reserve</small></p>
        </div>
      </div>)
  }

  render() {
    return (
      <Section id="tickets" title="Tickets">
        <div className="row">
          <div className="col">
            <div className="card-deck">
              <this.GeneralAdmission />
              <this.Vip />
            </div>
          </div>
        </div>
        <ETapestry id="toast" title="Purchase Tickets"/>
        {/* <div className="row">
          <iframe id="etapIframe" title="donate" src="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/toast.html"></iframe>
          <script src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js" type="text/JavaScript"></script>
        </div> */}
      </Section >
    )
  }
}
