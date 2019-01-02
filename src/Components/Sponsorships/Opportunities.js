import React, { Component } from 'react';
import Opportunity from './Opportunity'
const json = require('./sponsorships.json');

class Opportunities extends Component {
  render() {
    return (
      <div className="row">
          {json.levels.map(l => <Opportunity key={l.title} data={l}/>)}
      </div>
    );
  }
}

export default Opportunities;