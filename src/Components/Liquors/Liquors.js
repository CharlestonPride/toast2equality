import React, { Component } from 'react'
import Section from '../Section/Section'
import Liquor from './Liquor';
import Pineapple from './Pineapple.jpg';
import Peach from './Peach.jpg';
import RumHaven from './RumHaven.jpg';
import Honey from './Honey.jpg';
import Grapefruit from './Grapefruit.jpg';
import Camarena from './Camarena.jpg';
import Breakthru from './breakthru.jpg'
import './Liquors.css';

export default class Liquors extends Component {
  render() {
      const peach = "http://www.newamsterdamspirits.com/vodka/peach"
      const pineapple = "http://www.newamsterdamspirits.com/vodka/pineapple"
      const grapefruit = "http://www.newamsterdamspirits.com/flavors"
      const jack = "https://www.jackdaniels.com/en-us/whiskey/tennessee-honey/"
      const camerena = "http://www.tequilacamarena.com/tequilas/silver/"
      const rumHaven = "http://www.rumhaven.com/"
      return (
        <Section id="liquors" title="The 2018 Liquors">
            <div className="row">
              <Liquor image={Peach} name="New Amsterdam Peach Vodka" url={peach} />
              <Liquor image={Camarena} name="Camerena Tequila Silver" url={camerena} />
              <Liquor image={Pineapple} name="New Amsterdam Pineapple Vodka" url={pineapple} />
              <Liquor image={Honey} name="Jack Daniels Tennessee Honey" url={jack} />
              <Liquor image={Grapefruit} name="New Amsterdam Grapefruit Vodka" url={grapefruit} />
              <Liquor image={RumHaven} name="RumHaven Coconut Rum" url={rumHaven} />
            </div>
              <div className="row">
                  <img className="breakthru img-fluid" alt="Breakthru Beverage Logo" src={Breakthru} />
              </div>
        </Section>
    )
  }
}

