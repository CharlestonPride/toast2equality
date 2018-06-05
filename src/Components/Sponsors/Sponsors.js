import React, { Component } from 'react'
import Section from '../Section/Section';
import Slider from 'react-slick'
import Sponsor from './Sponsor'
import Mix959 from './mix959.png'
import Blackbaud from './blackbaud.jpg'
import DavidAylor from './davidaylor.jpg'
import InvitationOnly from './invitationOnly.png'
import DMProductions from './dmproductions.png'
import Dudleys from './dudleys.jpg'

export default class Sponsors extends Component {
    
  render() {
      var settings = {
          infinite: true,
          speed: 600,
          dots: true,
          autoplay: true,
          slidesToShow: 4,
          slidesToScroll: 1,
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
                  breakpoint: 750,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      autoplay: true
                  }
              },
              {
                  breakpoint: 480,
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
        <Section id="sponsors" title="Our Sponsors" desc="" >
            <Slider {...settings}>
                <Sponsor name="Mix 95.9" image={Mix959} facebook="mix959" twitter="mix959live" instagram="mix959live" web="http://mix959.com" level="Promoting Sponsor"/>
                <Sponsor name="Invitation Only" image={InvitationOnly} facebook="InvitationOnlyLLC" twitter="" instagram="" web="https://www.invitationonlycharleston.com" level="Supporting Sponsor"/>
                <Sponsor name="Blackbaud" image={Blackbaud} facebook="blackbaud" twitter="blackbaud" instagram="blackbaud" web="https://www.blackbaud.com" level="Presenting Sponsor"/>
                <Sponsor name="Dudley's on Ann" image={Dudleys} facebook="dudleysonann" twitter="dudleysonann" instagram="dudleysonann" web="http://www.dudleysonann.com" level="Presenting Sponsor" />
                <Sponsor name="David Aylor Law Firm" image={DavidAylor} facebook="AylorLaw" twitter="DavidAylor" instagram="davidaylorlawoffices" web="https://davidaylor.com/" level="Promoting Sponsor"/>
                <Sponsor name="D&amp;M Productions" image={DMProductions} facebook="chsweddingdj" twitter="" instagram="dandm_productions" web="https://www.alowcountryevent.com/" level="Supporting Sponsor"/>
            </Slider>
        </Section>
    )
  }
}
