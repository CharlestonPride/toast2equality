import React, { Component } from "react";
import Opportunity from "./Opportunity";
// const json = require("./sponsorships.json");

class Opportunities extends Component {
  render() {
    return (
      <div className="row">
        {this.props.data &&
          this.props.data.map(s => <Opportunity key={s.id} data={s} />)}
      </div>
    );
  }
}

export default Opportunities;
