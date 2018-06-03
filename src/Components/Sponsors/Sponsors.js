import React, { Component } from 'react'
import Section from '../Section/Section';
import Slider from 'react-slick'
import Sponsor from './Sponsor'
import Mix959 from './mix959.png'
import Blackbaud from './blackbaud.jpg'
import DavidAylor from './davidaylor.jpg'
import InvitationOnly from './invitationOnly.png'
import DMProductions from './dmproductions.png'


export default class Sponsors extends Component {
    
  render() {
      var settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true
      };
    return (
        <Section id="sponsors" title="Our Sponsors" desc="" >
            <Slider {...settings}>
                <Sponsor image={Mix959} facebook="mix959" twitter="mix96live" instagram="mix959live" web="http://mix959.com"/>
                <Sponsor image={InvitationOnly} facebook="InvitationOnlyLLC" twitter="" instagram="" web="https://www.invitationonlycharleston.com" />
                <Sponsor image={Blackbaud} facebook="blackbaud" twitter="blackbaud" instagram="blackbaud" web="https://www.blackbaud.com"/>
                <Sponsor image={DavidAylor} facebook="AylorLaw" twitter="DavidAylor" instagram="davidaylorlawoffices" web="https://davidaylor.com/"/>
                <Sponsor image={DMProductions} facebook="chsweddingdj" twitter="" instagram="dandm_productions" web="https://www.alowcountryevent.com/"/>
            </Slider>
        </Section>
    )
  }
}
