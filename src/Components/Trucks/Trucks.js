import React, { Component } from 'react'
import Slider from 'react-slick'
import Section from '../Section/Section';
import Truck from './Truck'
import './Trucks.css'
import Braised from './braised.png'
import CarolinaCreole from './carolinaCreole.png'
import DIGRig from './DIGRIGsmall.png'
import KingOfPops from './kingOfPops.jpg'
import Semilla from './semilla_dark.jpg'

export default class Trucks extends Component {
  render() {
      var settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true
      };
    return (
        <Section id="trucks" title="Food Trucks" desc="" >
            <Slider {...settings}>
                <Truck image={Braised} facebook="braisedinthesouthfoodtruck" twitter="braisedtruck" instagram="braisedinthesouth" web="http://braisedinthesouthfoodtruck.com" />
                <Truck image={CarolinaCreole} facebook="charlestonCaribbeancreolefoodtruck" twitter="charlestoncarib" instagram="charlestoncaribbeancreole" web="http://www.charlestoncaribbeancreole.com/" />
                <Truck image={DIGRig} facebook="DIGRIG" twitter="DIGCHS" instagram="DIGCHS" web="http://dighospitality.com/the-dig-rig/" />
                <Truck image={KingOfPops} facebook="kingofpops" twitter="kingofpops" instagram="kingofpops" web="https://kingofpops.com/" />
                <Truck image={Semilla} facebook="semillachs" twitter="semillachs" instagram="semillachs" web="http://semillachs.com/" />
            </Slider>
        </Section>
    )
  }
}
