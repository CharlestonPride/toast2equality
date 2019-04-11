import React, { Component } from "react";
import Section from "../Section/Section";
import Opportunities from "./Opportunities";
import Break from "../Break/Break";
import ETapestry from "../ETapestry/ETapestry";

let desc =
  "A sponsorship of Toast To Equality is a great way to promote your organization/company’s commitment to equal rights for all people." +
  " A sponsorship will not only promote your organization to a large crowd of attendees, " +
  "your organization will also gain exposure through our various media partners. We offer a variety of ways to get involved through a sponsorship:";
class Sponsorships extends Component {
  constructor() {
    super();
    this.state = {
      enabled: false,
      opportunities: []
    };
  }

  componentDidMount() {
    fetch("https://0qrq29wcf5.execute-api.us-east-1.amazonaws.com/prod/sponsor")
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

  render() {
    return (
      <div>
        <Break sid="break8" />
        <Section
          id="sponsorships"
          title="Sponsorship Opportunities"
          desc={desc}
        >
          <Opportunities data={this.state.opportunities} />
          {this.state.enabled ? (
            <ETapestry id="tte-sponsorships" title="Become a Sponsor" />
          ) : (
            <div>
              <h3>Sponsorship Registration is Closed.</h3>
              <p>
                Please reach out to us at{" "}
                <a href="mailto:info@toasttoequality.com">
                  info@toasttoequality.com
                </a>{" "}
                if you have any questions/concerns.
              </p>
            </div>
          )}
        </Section>
      </div>
    );
  }
}

export default Sponsorships;
