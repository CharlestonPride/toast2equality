import React, { Component } from 'react'
import Section from '../Section/Section'
import Liquor from './Liquor';
import Pineapple from './Pineapple.jpg';
import Mango from './Mango.jpg';
import RumHaven from './RumHaven.jpg';
import Honey from './Honey.jpg';
import Grapefruit from './Grapefruit.jpg';
import Camarena from './Camarena.jpg';
import Breakthru from './breakthru.jpg'
import './Liquors.css';

export default class Liquors extends Component {
  render() {
      const stoli = "https://stoli.com/?utm_source=charleston_pride&utm_medium=toast_to_equality&utm_campaign=sponsors"
      const jack = "https://www.jackdaniels.com/en-us/whiskey/tennessee-honey/?utm_source=charleston_pride&utm_medium=toast_to_equality&utm_campaign=sponsors"
      const camerena = "http://www.tequilacamarena.com/tequilas/silver?utm_source=charleston_pride&utm_medium=toast_to_equality&utm_campaign=sponsors"
      const rumHaven = "http://www.rumhaven.com/?utm_source=charleston_pride&utm_medium=toast_to_equality&utm_campaign=sponsors"
      return (
        <Section id="liquors" title="Meet the Liquors">
            <div className="row">
                  <Liquor image={Grapefruit} name="Stoli Crushed Ruby Red Grapefruit" url={stoli + "&utm_content=grapefruit"} />
                  <Liquor image={Camarena} name="Camerena Tequila Silver" url={camerena} />
                  <Liquor image={Pineapple} name="Stoli Crushed Pineapple" url={stoli + "&utm_content=pineapple"} />
                  <Liquor image={Honey} name="Jack Daniels Tennessee Honey" url={jack} />
                  <Liquor image={Mango} name="Stoli Crushed Mango" url={stoli + + "&utm_content=mango"} />
                  <Liquor image={RumHaven} name="RumHaven Coconut Rum" url={rumHaven} />
            </div>
              <div className="row">
                  <img className="breakthru img-fluid" src={Breakthru} />
              </div>
        </Section>
    )
  }
}

