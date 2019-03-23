import React, { Component } from "react";
import Section from "../../Components/Section/Section";
import Entertainer from "./Entertainer";
import "./Entertainment.css";
import Mike from "./mike.jpg";
import Trevor from "./trevor.jpg";
import BenderFunk from "./benderfunk.jpg";
import BiznessSuit from "./BiznessSuit.jpg";

export default class Entertainment extends Component {
  Row1() {
    return (
      <div className="row">
        <div className="col-md-6 col-lg-4 offset-lg-2">
          <Entertainer
            src={Mike}
            name="MC Mike Edwards"
            company="Mix 95.9 | Two Girls &amp; a Guy"
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <Entertainer
            src={Trevor}
            name="DJ Trevor D"
            company="D&amp;M Productions"
          />
        </div>
        <div className="col-md-6 col-lg-4 offset-lg-2">
          <Entertainer src={BenderFunk} name="Bender Funk" />
        </div>
        <div className="col-md-6 col-lg-4">
          <Entertainer src={BiznessSuit} name="Bizness Suit" />
        </div>
      </div>
    );
  }
  render() {
    return (
      <Section id="entertainment" title="The Entertainment">
        <this.Row1 />
      </Section>
    );
  }
}
