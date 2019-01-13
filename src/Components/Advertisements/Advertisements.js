import React, { Component } from 'react';
import Section from '../Section/Section'
import Break from '../Break/Break';
import ETapestry from '../ETapestry/ETapestry';

let desc = "Advertising in the Toast To Equality Program is a fantastic way to spread the word about your company/organization. " +
  "The Toast To Equality Program is a 4.25\" W x 5.25\" H publication with 16 pages. " +
  "We print 2,000 copies of the Program, half of which are distributed and available at participating bars and " +
  "sponsors two weeks prior to the event. The remaining copies are handed out to attendees of Toast To Equality as they enter the event. "
  + " We offer a variety of ways to advertise with us.";

class Advertisements extends Component {

  PricingTable() {
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
          <tr>
            <td>PREMIUM BACK COVER (1)</td>
            <td>4.5" W x 5.5" H (INCLUDES BLEED)</td>
            <td>$600</td>
          </tr>
          <tr>
            <td>PREMIUM INSIDE FRONT COVER (1)</td>
            <td>4.5" W x 5.5" H (INCLUDES BLEED)</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>PREMIUM INSIDE BACK COVER (1)</td>
            <td>4.5" W x 5.5" H (INCLUDES BLEED)</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>FULL PAGE</td>
            <td>4.5" W x 5.5" H (INCLUDES BLEED)</td>
            <td>$400</td>
          </tr>
          <tr>
            <td>HALF PAGE</td>
            <td>3.625" W x 2.3" H</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>ONE-THIRD PAGE</td>
            <td>3.625" W x 1.5" H</td>
            <td>$200</td>
          </tr>
        </tbody>
      </table>
    )
  }

  Guidelines() {
    return (
      <ul className="list-group">
        <li className="list-group-item" ><strong>Ad Reservation Deadline:</strong> Friday, May 10<sup>th</sup></li>
        <li className="list-group-item" ><strong>Print Ready Artwork Deadline:</strong> Monday, May 13<sup>th</sup></li>
        <li className="list-group-item" ><strong>Ad Submissions:</strong> Email final artwork to <a href="mailto:info@toasttoequality.com">info@toasttoequality.com</a></li>
        <li className="list-group-item" ><strong>File Format:</strong> PDF or EPS</li>
        <li className="list-group-item" ><strong>Color:</strong> CMYK</li>
        <li className="list-group-item" ><strong>Fonts:</strong> Embed all fonts</li>
        <li className="list-group-item" ><strong>Resolution:</strong> 300 DPI or greater</li>
      </ul>
    )
  }

  render(props) {
    return (
      <div>
        <Break sid="break6" />
        <Section id="advertisments" title="Advertisement Opportunities" desc={desc}>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1 className="colored">Options</h1>
              <this.PricingTable />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1 className="colored">Ad Design Guidelines</h1>
              <p className="lead">When designing your ad for the Toast To Equality Program, please keep the following guidelines in mind:</p>
              <this.Guidelines />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ETapestry id="tte-advertising" title="Purchase an Ad" />
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default Advertisements;