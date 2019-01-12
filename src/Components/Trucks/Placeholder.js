import React, { Component } from 'react';
import register from './register.png'

class Placeholder extends Component {
  render() {
    return (
      <div className="truck">
      <img src={register} alt="register to be a food vendor" width="250px" height="250px" />
      <div>
        <a href="mailto:info@toasttoequality.com?subject=Food Vendor Registration"><i className="fa fa-envelope"></i> Contact Us</a>
      </div>
  </div>
    );
  }
}

export default Placeholder;