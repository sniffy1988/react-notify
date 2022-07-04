import React from "react";
import getRegions from "../utils/getRegions";

const regions = getRegions();

export default class RegionSelector extends React.Component {
  state = {
    lng: "uk",
    region: null,
  };
  setRegion = (reg) => () => {
    this.setState({
      region: reg,
    });
  };
  render() {
    return (
      <>
        <div>
          Selected region:{" "}
          {this.state.region !== null
            ? this.state.region.public_name[this.state.lng]
            : "none"}
        </div>
        <ul>
          {regions.map((reg) => (
            <li key={reg.id} onClick={this.setRegion(reg)}>
              {reg.public_name[this.state.lng]}
            </li>
          ))}
        </ul>
        <hr />
      </>
    );
  }
}
