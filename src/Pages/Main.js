import React, { Component } from "react";
import Hero from "../Components/Hero/Hero";
import Liquors from "../Components/Liquors/Liquors";
import Contenders from "../Components/Contenders/Contenders";
import Sponsors from "../Components/Sponsors/Sponsors";
import Trucks from "../Components/Trucks/Trucks";
import Event from "../Components/Event/Event";
import Entertainment from "../Components/Entertainment/Entertainment";
import Tickets from "../Components/Tickets/Tickets";
import Break from "../Components/Break/Break";
import PresentedBy from "../Components/PresentedBy/PresentedBy";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Event />
        <Break sid="break1" />
        <Contenders />
        <Break sid="break2">
          <PresentedBy />
        </Break>
        <Liquors />
        <Break sid="break10" />
        <Entertainment />
        <Break sid="break11" />
        <Sponsors />
        <Break sid="break4" />
        <Trucks />
        <Break sid="break5" />
        <Tickets />
        <Break sid="break3" />
      </div>
    );
  }
}
