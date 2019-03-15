import React, { Component } from "react";
import Opportunity from "./Opportunity";
// const json = require("./sponsorships.json");

class Opportunities extends Component {
  constructor() {
    super();
    this.state = {
      opportunities: []
    };
  }

  componentDidMount() {
    fetch(
      "https://s3.amazonaws.com/charlestonpride.assets/toast/json/sponsorships.json"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        let opportunities = data.levels.map(s => (
          <Opportunity key={s.title} data={s} />
        ));
        this.setState({ opportunities: opportunities });
      });
  }
  render() {
    return <div className="row">{this.state.opportunities}</div>;
  }
}

export default Opportunities;
