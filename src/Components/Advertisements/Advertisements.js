import React, { Component } from "react";
import Section from "../Section/Section";
import Break from "../Break/Break";
import ETapestry from "../ETapestry/ETapestry";
import Ad from "./Ad";

let desc =
  "Advertising in the Toast To Equality Program is a fantastic way to spread the word about your company/organization. " +
  'The Toast To Equality Program is a 4.25" W x 5.25" H publication with 16 pages. ' +
  "We print 2,000 copies of the Program, half of which are distributed and available at participating bars and " +
  "sponsors two weeks prior to the event. The remaining copies are handed out to attendees of Toast To Equality as they enter the event. " +
  " We offer a variety of ways to advertise with us.";

class Advertisements extends Component {
  constructor() {
    super();
    this.state = {
      enabled: false,
      opportunities: []
    };
  }
  componentDidMount() {
    fetch(
      "https://0qrq29wcf5.execute-api.us-east-1.amazonaws.com/prod/advertise"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        let opportunities = data
          .filter(a => a.id !== 0)
          .sort((a, b) => a.id - b.id);
        let enabled = data.find(d => d.id === 0).enabled;
        this.setState({ opportunities: opportunities, enabled: enabled });
      });
  }

  PricingTable(props) {
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>AD SIZE</th>
            <th>SPECS</th>
            <th>RATE</th>
          </tr>
        </thead>
        <tbody>
          {props.opportunities &&
            props.opportunities.map(o => (
              <Ad
                key={o.id}
                name={o.name}
                width={o.width}
                height={o.height}
                bleed={o.bleed}
                rate={o.rate}
                remaining={o.remaining}
                total={o.total}
              />
            ))}
        </tbody>
      </table>
    );
  }

  Guidelines() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Ad Reservation Deadline:</strong> Friday, May 10<sup>th</sup>
        </li>
        <li className="list-group-item">
          <strong>Print Ready Artwork Deadline:</strong> Monday, May 13
          <sup>th</sup>
        </li>
        <li className="list-group-item">
          <strong>Ad Submissions:</strong> Email final artwork to{" "}
          <a href="mailto:info@toasttoequality.com">info@toasttoequality.com</a>
        </li>
        <li className="list-group-item">
          <strong>File Format:</strong> PDF or EPS
        </li>
        <li className="list-group-item">
          <strong>Color:</strong> CMYK
        </li>
        <li className="list-group-item">
          <strong>Fonts:</strong> Embed all fonts
        </li>
        <li className="list-group-item">
          <strong>Resolution:</strong> 300 DPI or greater
        </li>
      </ul>
    );
  }

  render(props) {
    return (
      <div>
        <Break sid="break9" />
        <Section
          id="advertisments"
          title="Advertisement Opportunities"
          desc={desc}
        >
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1 className="colored">Options</h1>
              <this.PricingTable opportunities={this.state.opportunities} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1 className="colored">Ad Design Guidelines</h1>
              <p className="lead">
                When designing your ad for the Toast To Equality Program, please
                keep the following guidelines in mind:
              </p>
              <this.Guidelines />
            </div>
          </div>
          <div className="row">
            <div className="col">
              {this.state.enabled ? (
                <ETapestry id="tte-advertising" title="Purchase an Ad" />
              ) : (
                <div>
                  <h3>Ad Registration is Closed.</h3>
                  <p>
                    Please reach out to us at{" "}
                    <a href="mailto:info@toasttoequality.com">
                      info@toasttoequality.com
                    </a>{" "}
                    if you have any questions/concerns.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default Advertisements;
