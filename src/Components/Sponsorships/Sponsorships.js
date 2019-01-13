import React, { Component } from 'react';
import Section from '../Section/Section'
import Opportunities from './Opportunities';
import Break from '../Break/Break';
import ETapestry from '../ETapestry/ETapestry';

let desc = "A sponsorship of Toast To Equality is a great way to promote your organization/company’s commitment to equal rights for all people." +
  " A sponsorship will not only promote your organization to a large crowd of attendees, " +
  "your organization will also gain exposure through our various media partners. We offer a variety of ways to get involved through a sponsorship:"
class Sponsorships extends Component {

  render() {
    return (
      <div>
        <Break sid="break6" />
        <Section id="sponsorships" title="Sponsorship Opportunities" desc={desc}>
          <Opportunities />
          <ETapestry id="tte-sponsorships" title="Become a Sponsor" />
        </Section>
      </div>
    );
  }
}

export default Sponsorships;