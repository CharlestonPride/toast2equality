import React, { Component } from 'react'
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Hero/Hero';
import Liquors from '../Components/Liquors/Liquors';
import Contenders from '../Components/Contenders/Contenders';
import Sponsors from '../Components/Sponsors/Sponsors'
import Trucks from '../Components/Trucks/Trucks'
import Footer from "../Components/Footer/Footer"
import Event from "../Components/Event/Event"
import Entertainment from '../Components/Entertainment/Entertainment'
import Winnder from '../Components/Winner/Winner'
import Winner from '../Components/Winner/Winner';

export default class Main extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Hero/>
          <Winner/>
          <Event />
          <Contenders />
          <Liquors/>
          <Entertainment />
          <Sponsors/>
          <Trucks/>
          <Footer/>
      </div>

    )
  }
}
