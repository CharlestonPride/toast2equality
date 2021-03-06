import React, { Component } from "react";
import Section from "../Section/Section";
import "./Event.css";
import event from "./event.jpg";

export default class Event extends Component {
  render() {
    return (
      <Section id="contest" title="The Contest" desc="A Cocktail Competition">
        <div className="row">
          <div className="col-lg-6">
            <div className="details text-center">
              <h1>What?</h1>
              <h2>12 Local Bars</h2>
              <p>
                Serving up complimentary competition samples to all attendees
              </p>
              <span>
                <i className="fa fa-plus" aria-hidden="true" />
              </span>
              <h2>6 Liquors</h2>
              <p>
                Each bar will be randomly assigned one of the six liquors for
                their cocktail
              </p>
              <span>
                <i className="fa fa-plus" aria-hidden="true" />
              </span>
              <h2 className="font-pacifico colored">Your Vote</h2>
              <p>
                You help determine the <strong>People's Choice</strong> after
                you've sampled them all!
              </p>
              <span>
                <i className="fa fa-ticket" aria-hidden="true" />
              </span>
              <h2>2 Winners</h2>
              <div className="row text-center">
                <div className="col-6">
                  <h3 className="colored">People's Choice</h3>
                  <p>
                    Pure Democracy! You, the people decide the{" "}
                    <strong>People's Choice</strong>! Text to Vote
                  </p>
                </div>
                <div className="col-6">
                  <h3 className="colored">Best in Show</h3>
                  <p>
                    Our panel of 3 judges will determine the{" "}
                    <strong>Best in Show</strong> and the Official Cocktail of{" "}
                    <a
                      href="https://www.charlestonpride.org/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Charleston Pride 2019
                    </a>
                  </p>
                </div>
              </div>

              <span>
                <i className="fa fa-trophy" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="datetime">
              <h1>When?</h1>
              <h2 className=" ">June 22, 2019 | 7pm - 11pm</h2>
              <div className="location">
                <h1>Where?</h1>
                <h2>Charleston Visitor Center &amp; Bus Shed</h2>
                <h3>375 Meeting St.</h3>
                <h3>Charleston, SC 29403</h3>
                <h3 className="">21+ Only</h3>
              </div>
              <p>
                Cash Bar <span className="">,</span> <a href="#food">Food</a>{" "}
                <span className="">&amp;</span>{" "}
                <a href="#entertainment">Live Entertainment!</a>
              </p>
              <div className="event-image">
                <img
                  src={event}
                  className="img-fluid"
                  alt="handing out drinks"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
