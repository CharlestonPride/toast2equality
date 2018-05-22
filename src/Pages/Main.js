import React, { Component } from 'react'
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Hero/Hero';
import Contest from '../Components/Contest/Contest';
import Liquors from '../Components/Liquors/Liquors';

export default class Main extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Hero/>
          <Contest/>
          <Liquors/>
      </div>
      
    )
  }
}
