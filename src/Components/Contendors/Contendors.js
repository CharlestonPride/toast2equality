import React, { Component } from 'react'
import Section from '../Section/Section'
import './Contendors.css'
import Contendor from "./Contendor"
import Dig from './diginpark.png'
import Dudleys from './dudleys.jpg'
import ElJefe from './eljefe.jpg'
import Pub61 from './pub61.png'
import Shelter from './shelter.png'
import Tabbuli from './tabbuli.jpg'
import Toast from './toast.png'
import Voodoo from './voodoo.jpg'
import Warehouse from './warehouse.jpg'

export default class Contendors extends Component {
  render() {
    return (
        <Section id="contendors" title="The Contendors" desc="Each bar will create a speciality cocktail using their chosen liquor">            
          <div className="row">
          <Contendor name="DIG in the Park" facebook="diginthepark" twitter="digchs" instagram="digchs" web="http://dighospitality.com/dig-in-the-park" logo={Dig} />
          <Contendor name="Dudleys on Ann" facebook="dudleysonann" twitter="dudleysonann" instagram="dudleysonann" web="http://www.dudleysonann.com" logo={Dudleys} />
          <Contendor name="El Jefe" facebook="eljefe.chs" twitter="eljefechs" instagram="eljefe.chs" web="https://www.eljefechs.com" logo={ElJefe} />
          <Contendor name="The Pub 61" facebook="pub61" twitter="" instagram="" web="https://www.pub61.com" logo={Pub61} />
          <Contendor name="The Shelter Kitchen + Bar" facebook="TheShelterKitchenandBar" twitter="TheShelterKandB" instagram="shelterkitchenandbar" web="http://www.theshelterkitchenandbar.com" logo={Shelter} />
          <Contendor name="Tabbuli Grill" facebook="tabbuli" twitter="tabbuli" instagram="tabbuli" web="http://tabbuli.com" logo={Tabbuli} />
          <Contendor name="Toast" facebook="ToastofCharleston" twitter="toastcharleston" instagram="toastofcharleston" web="http://www.toastofcharleston.com" logo={Toast} />
          <Contendor name="Voodoo Tiki Bar" facebook="VooTikiBar" twitter="voodoo_tikibar" instagram="voodootikibar" web="http://www.voodootikibar.com" logo={Voodoo} />
          <Contendor name="Warehouse" facebook="warehousecharleston" twitter="team_warehouse" instagram="wearewarehouse" web="http://wearewarehouse.com" logo={Warehouse} />
          </div>
        </Section>
    )
  }
}
