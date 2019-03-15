import React, { Component } from 'react'
import Slider from 'react-slick'
import Section from '../Section/Section';
import Truck from './Truck'
import './Trucks.css'

export default class Trucks extends Component {
    constructor() {
        super();
        this.state = {
          trucks: [
            <Truck key="rolled" name="Rolled Quesadillas" image="rolled.jpeg" facebook="RolledQuesadillas1" twitter="Rolledqdillas" instagram="rolledquesadillas" web="http://rolledquesadillas.com" />,
            <Truck key="braised" name="Braised in the South" image="braised.png" facebook="braisedinthesouthfoodtruck" twitter="braisedtruck" instagram="braisedinthesouth" web="http://braisedinthesouthfoodtruck.com" />,
            <Truck key="bacon" name="Bac'n me Crazy" image="bacon.png" facebook="bacnmecrazyfoodtruck" twitter="bacnmecrazy" instagram="bacnmecrazy" web="http://www.bacnmecrazy.com/" />,
            <Truck key="kop" name="King of Pops" image="kingOfPops.jpg" facebook="kingofpops" twitter="kingofpops" instagram="kingofpops" web="https://kingofpops.com" />,]
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
