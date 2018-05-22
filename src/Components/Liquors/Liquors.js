import React, { Component } from 'react'
import Liquor from './Liquor';
import Pineapple from './Pineapple.jpg';
import Mango from './Mango.jpg';
import RumHaven from './RumHaven.jpg';
import Honey from './Honey.jpg';
import Grapefruit from './Grapefruit.jpg';
import Camarena from './Camarena.jpg';
import './Liquors.css';

export default class Liquors extends Component {
  render() {
    return (
        <div >
            <div className="container-fluid text-center">
                <h1 className="font-pacifico">Meet the Liquors</h1>
                <div className="row">
                    <Liquor image={Grapefruit} />
                    <Liquor image={Camarena} />
                    <Liquor image={Pineapple} />
                    <Liquor image={Honey} />
                    <Liquor image={Mango} />
                    <Liquor image={RumHaven} />
                </div>
            </div>
        </div>
    )
  }
}

