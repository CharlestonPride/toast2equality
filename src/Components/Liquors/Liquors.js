import React, { Component } from "react";
import Section from "../Section/Section";
import Liquor from "./Liquor";
import Gin from "./na_gin_square.jpg";
import Lemon from "./Lemon_square.jpg";
import RumHaven from "./rumhaven_square.jpg";
import Honey from "./jackhoney_square.jpg";
import Raspberry from "./Raspberry2_square.jpg";
import Camarena from "./camarena_square.jpg";
import Breakthru from "./breakthru.jpg";
import "./Liquors.css";

export default class Liquors extends Component {
  render() {
    const lemon = "http://www.newamsterdamspirits.com/vodka/lemon";
    const gin = "http://www.newamsterdamspirits.com/gin";
    const raspberry = "http://www.newamsterdamspirits.com/vodka/raspberry";
    const jack = "https://www.jackdaniels.com/en-us/whiskey/tennessee-honey/";
    const camerena = "http://www.tequilacamarena.com/tequilas/silver/";
    const rumHaven = "http://www.rumhaven.com/";
    return (
      <Section id="liquors" title="The Liquors">
        <div className="row">
          <Liquor image={Lemon} name="New Amsterdam Lemon Vodka" url={lemon} />
          <Liquor
            image={Camarena}
            name="Camerena Tequila Silver"
            url={camerena}
          />
          <Liquor image={Gin} name="New Amsterdam Gin" url={gin} />
          <Liquor
            image={Honey}
            name="Jack Daniels Tennessee Honey"
            url={jack}
          />
          <Liquor
            image={Raspberry}
            name="New Amsterdam Raspberry Vodka"
            url={raspberry}
          />
          <Liquor image={RumHaven} name="RumHaven Coconut Rum" url={rumHaven} />
        </div>
        <div className="row">
          <img
            className="breakthru img-fluid"
            alt="Breakthru Beverage Logo"
            src={Breakthru}
          />
        </div>
      </Section>
    );
  }
}
