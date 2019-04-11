import React, { Component } from "react";
import PropTypes from "prop-types";

class Ad extends Component {
  Title(props) {
    if (props.total) {
      return <td>{props.name.toUpperCase() + " (" + props.total + ")"}</td>;
    }
    return <td>{props.name.toUpperCase()}</td>;
  }
  Dimensions(props) {
    if (props.bleed) {
      return (
        <td>
          {props.width}" W x {props.height}" H (INCLUDES BLEED)
        </td>
      );
    }
    return (
      <td>
        {props.width}" W x {props.height} H"
      </td>
    );
  }
  Price(props) {
    debugger;
    if (props.remaining !== undefined && props.remaining === 0) {
      return <td className="colored">SOLD OUT</td>;
    }
    return <td>${props.rate}</td>;
  }
  render() {
    return (
      <tr>
        <this.Title name={this.props.name} total={this.props.total} />
        <this.Dimensions
          width={this.props.width}
          height={this.props.height}
          bleed={this.props.bleed}
        />
        <this.Price remaining={this.props.remaining} rate={this.props.rate} />
      </tr>
    );
  }
}

Ad.propTypes = {
  name: PropTypes.string.isRequired,
  total: PropTypes.number,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  bleed: PropTypes.bool,
  remaining: PropTypes.number,
  rate: PropTypes.number.isRequired
};

export default Ad;
