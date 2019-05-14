import React, { Component } from "react";
import Section from "../Section/Section";
import "./Tickets.css";
import ETapestry from "../ETapestry/ETapestry";

export default class Tickets extends Component {
  constructor() {
    super();
    this.state = {
      enabled: false,
      vip: true
    };
  }
  componentDidMount() {
    fetch(
      "https://skvfc3ly76.execute-api.us-east-1.amazonaws.com/prod/settings/5642ec18-356e-4a8b-b7b3-617377a2918f"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ enabled: data.enabled, vip: data.vip });
      });
  }

  GeneralAdmission({ tickets }) {
    return (
      <div className="card">
        <div className="card-header">
          <h2>General Admission</h2>
        </div>
        <div className="card-body">
          {tickets ? <h2>$15 - Online </h2> : <em>Online Sales Have Ended</em>}
          <h2>$20 - At the Door</h2>
          <h3 className="font-pacifico">What You Get</h3>
          <ul>
            <li>
              <strong>24</strong> Complimentary Sample Tickets
            </li>
            <li>
              <strong>1</strong> Vote
            </li>
            <li>Access to Cash Bar</li>
            <li className="asterisk">Souvenir Cup</li>
            <li className="asterisk">Souvenir Drawstring Bag</li>
            <li className="asterisk">Toast To Equality Program</li>
          </ul>
        </div>
        <div className="card-footer text-muted">
          <p>
            <small>Limited to first 1000 attendees</small>
          </p>
        </div>
      </div>
    );
  }

  Vip({ tickets, vip }) {
    return (
      <div className="card vip">
        <div className="card-header">
          <h2>VIP</h2>
        </div>
        <div className="card-body">
          {vip ? (
            tickets ? (
              <h2>$50 - Online </h2>
            ) : (
              <h2>$50 - At the Door </h2>
            )
          ) : (
            <h2 className="colored">Sold Out</h2>
          )}
          <h2>
            FREE -{" "}
            <a
              href="https://www.charlestonpride.org/friends-of-pride/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Friends of Pride
            </a>{" "}
          </h2>
          <h3 className="font-pacifico">What You Get</h3>
          <ul className="list-unstyled">
            <li> General Admission</li>
            <li>
              <i className="fa fa-plus colored" aria-hidden="true" />
            </li>
            <li>
              Access to <strong>VIP Paradise</strong>
            </li>
            <li>
              <em>
                Includes Open Bar and Catering By{" "}
                <a
                  href="https://duvallevents.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Duvall
                </a>
                .
              </em>
            </li>
            <li>Limited number of tickets available</li>
          </ul>
        </div>
        <div className="card-footer text-white">
          <p>
            <small>
              Friends of Pride: send us an{" "}
              <a href="mailto:friends@charlestonpride.org?subject=Friend of Pride Reservation">
                email
              </a>{" "}
              to reserve
            </small>
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Section id="tickets" title="Tickets">
        <div className="row">
          <div className="col">
            <div className="card-deck">
              <this.GeneralAdmission tickets={this.state.enabled} />
              <this.Vip tickets={this.state.enabled} vip={this.state.vip} />
            </div>
          </div>
        </div>
        {this.state.enabled ? (
          <ETapestry id="toast" title="Purchase Tickets" />
        ) : (
          <h2 className="colored section-padding">
            <em>Online sales have ended. Tickets avaliable at the door.</em>
          </h2>
        )}
      </Section>
    );
  }
}
