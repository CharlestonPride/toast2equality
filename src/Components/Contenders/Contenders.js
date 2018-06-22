import React, { Component } from 'react'
import Slider from 'react-slick'
import Section from '../Section/Section'
import './Contenders.css'
import Contender from "./Contender"
import Dig from './diginpark.png'
import Dudleys from './dudleys.jpg'
import ElJefe from './eljefe.jpg'
import Pub61 from './pub61.png'
import Shelter from './shelter.png'
import Tabbuli from './tabbuli.jpg'
import Toast from './toast.png'
import Voodoo from './voodoo.jpg'
import Warehouse from './warehouse.jpg'
import Semilla from './semilla_dark.jpg'
import Proof from './proof.png'
import Macintosh from './macintosh.png'

export default class Contenders extends Component {
  
  render() {
    var settings = {
      infinite: true,
      speed: 600,
      dots: true,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      lazyLoad: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
          }
        },
        {
          breakpoint: 750,
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
        <Section id="contenders" title="The Contenders" desc="">            
        <Slider {...settings}>
          <Contender name="DIG in the Park" facebook="diginthepark" twitter="digchs" instagram="digchs" web="http://dighospitality.com/dig-in-the-park" logo={Dig} />
          <Contender name="Dudleys on Ann" facebook="dudleysonann" twitter="dudleysonann" instagram="dudleysonann" web="http://www.dudleysonann.com" logo={Dudleys} />
          <Contender name="El Jefe" facebook="eljefe.chs" twitter="eljefechs" instagram="eljefe.chs" web="https://www.eljefechs.com" logo={ElJefe} />
          <Contender name="The Pub 61" facebook="pub61" twitter="" instagram="" web="https://www.pub61.com" logo={Pub61} />
          <Contender name="The Shelter Kitchen + Bar" facebook="TheShelterKitchenandBar" twitter="TheShelterKandB" instagram="shelterkitchenandbar" web="http://www.theshelterkitchenandbar.com" logo={Shelter} />
          <Contender name="Tabbuli Grill" facebook="tabbuli" twitter="tabbuli" instagram="tabbuli" web="http://tabbuli.com" logo={Tabbuli} />
          <Contender name="Toast" facebook="ToastofCharleston" twitter="toastcharleston" instagram="toastofcharleston" web="http://www.toastofcharleston.com" logo={Toast} />
          <Contender name="Voodoo Tiki Bar" facebook="VooTikiBar" twitter="voodoo_tikibar" instagram="voodootikibar" web="http://www.voodootikibar.com" logo={Voodoo} />
          <Contender name="Warehouse" facebook="warehousecharleston" twitter="team_warehouse" instagram="wearewarehouse" web="http://wearewarehouse.com" logo={Warehouse} />
          <Contender name="Semilla" facebook="semillachs" twitter="semillachs" instagram="semillachs" web="http://semillachs.com/" logo={Semilla}  />
          <Contender name="The Macintosh" facebook="TheMacintoshCharleston" twitter="macintoshchs" instagram="macintoshchs" web="http://themacintoshcharleston.com/" logo={Macintosh} />
          <Contender name="Proof" facebook="proofcharleston" twitter="proofonking" instagram="semillachs" web="http://www.charlestonproof.com/" logo={Proof} />
          </Slider>
        </Section>
    )
  }
}
