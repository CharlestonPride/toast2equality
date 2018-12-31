import React, { Component } from 'react';
import './App.css';
import Main from './Pages/Main';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Sponsor from './Pages/Sponsor';
import Advertise from './Pages/Advertise';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/sponsor" component={Sponsor} />
            <Route path="/advertise" component={Advertise} />
            <Route component={Main} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
