import React, { Component } from "react";
import getCity from "../utils/getCity";
const cities = getCity(1640);

class CitySelector extends Component {
  state = {
    lng: "uk",
    city: null,
  };

  setCity = (city) => () => {
    this.setState({
      city: city,
    });
  };

  render() {
    return (
      <>
        <div>
          Selected city:{" "}
          {this.state.city !== null
            ? this.state.city.public_name[this.state.lng]
            : "none"}{" "}
        </div>
        <ul>
          {cities.map((city) => (
            <li key={city.id} onClick={this.setCity(city)}>
              {city.public_name[this.state.lng]}
            </li>
          ))}
        </ul>
        <hr />
      </>
    );
  }
}

export default CitySelector;
