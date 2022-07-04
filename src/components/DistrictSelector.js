import React, { Component } from "react";
import getDistricts from "../utils/getDisctricts";
const disctricts = getDistricts(21);

class DiscrictSelector extends Component {
  state = {
    lng: "uk",
    district: null,
  };
  setDistrict = (district) => () => {
    this.setState({
      district: district,
    });
  };

  render() {
    return (
      <>
        <div>
          Selected disctrict:{" "}
          {this.state.district !== null
            ? this.state.district.public_name[this.state.lng]
            : ""}
        </div>
        <ul>
          {disctricts.map((district) => (
            <li key={district.id} onClick={this.setDistrict(district)}>
              {district.public_name[this.state.lng]}
            </li>
          ))}
        </ul>
        <hr />
      </>
    );
  }
}

export default DiscrictSelector;
