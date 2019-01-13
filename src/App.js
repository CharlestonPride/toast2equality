import React, { Component } from 'react';
import './App.css';
import Main from './Pages/Main';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Sponsor from './Pages/Sponsor';
import Advertise from './Pages/Advertise';
import ScrollToTop from './Util/ScrollToTop';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Nav />
          <Switch>
            <Route path="/sponsor" component={Sponsor} />
            <Route path="/advertise" component={Advertise} />
            <Route component={Main} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
