import React, { Component } from 'react'
import Slider from 'react-slick'
import Section from '../Section/Section';
import Truck from './Truck'
import Placeholder from './Placeholder'
import './Trucks.css'
import CarolinaCreole from './carolinaCreole.png'
import DIGRig from './DIGRIGsmall.png'
import KingOfPops from './kingOfPops.jpg'
import Semilla from './semilla_dark.jpg'
import Rolled from './rolled.jpeg'

export default class Trucks extends Component {
    constructor() {
        super();
        this.state = {
          trucks: [<Placeholder key="1" />, <Placeholder key="2" />, <Placeholder key="3" />, <Placeholder key="4" />],
        }
      }
  render() {
      var settings = {
          infinite: true,
          speed: 500,
          dots: true,
          autoplay: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          lazyLoad: true,
          responsive: [
              {
                  breakpoint: 1100,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      autoplay: true
                  }
              },
              {
                  breakpoint: 850,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      autoplay: true
                  }
              },
              {
                  breakpoint: 570,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: true,
                      dots: true
                  }
              }
          ]
      };
    return (
        <Section id="food" title="The Food" >
            <Slider {...settings}>
                {this.state.trucks}
            </Slider>
        </Section>
    )
  }
}
