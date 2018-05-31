import React, { Component } from 'react'
import Section from '../Section/Section'
import './Contendors.css'
import Contendor from "./Contendor";


export default class Contendors extends Component {
  render() {
    return (
        <Section id="contendors" title="The Contendors">
            <div className="row">
          <Contendor name="Contendor 1" facebook="" twitter="" instagram="" web="" logo="images/blog/1.jpg"/>
          <Contendor name="Contendor 2" facebook="" twitter="" instagram="" web="" logo="images/blog/1.jpg"/>
          <Contendor name="Contendor 3" facebook="" twitter="" instagram="" web="" logo="images/blog/1.jpg" />
          <Contendor name="Contendor 4" facebook="" twitter="" instagram="" web="" logo="images/blog/1.jpg"/>
          <Contendor name="Contendor 5" facebook="" twitter="" instagram="" web="" logo="images/blog/1.jpg"/>
          <Contendor name="Contendor 6" facebook="" twitter="" instagram="" web="" logo="images/blog/1.jpg"/>
            </div>
        </Section>
    )
  }
}
