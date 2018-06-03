import React, { Component } from 'react'
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Hero/Hero';
import Contest from '../Components/Contest/Contest';
import Liquors from '../Components/Liquors/Liquors';
import Contendors from '../Components/Contendors/Contendors';
import Sponsors from '../Components/Sponsors/Sponsors'
import Trucks from '../Components/Trucks/Trucks'
import Footer from "../Components/Footer/Footer"
import Event from "../Components/Event/Event"
import Tickets from "../Components/Tickets/Tickets"
export default class Main extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Hero/>
          <Contest/>
          <Liquors/>
          <Contendors/>
          <Sponsors/>
          <Trucks/>
          <Event/>
          <Tickets />
          <Footer/>
      </div>
      
    )
  }
}
