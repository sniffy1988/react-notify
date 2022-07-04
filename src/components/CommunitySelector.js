import React, { Component } from "react";
import getCommunity from "../utils/getCommunity";
const communities = getCommunity(141);

class CommunitySelector extends Component {
  state = {
    lng: "uk",
    community: null,
  };

  setCommunity = (district) => () => {
    this.setState({
      community: district,
    });
  };

  render() {
    return (
      <>
        <div>
          Selected Community:{" "}
          {this.state.community !== null
            ? this.state.community.public_name[this.state.lng]
            : "none"}
        </div>
        <ul>
          {communities.map((reg) => (
            <li key={reg.id} onClick={this.setCommunity(reg)}>
              {reg.public_name[this.state.lng]}
            </li>
          ))}
        </ul>
        <hr />
      </>
    );
  }
}

export default CommunitySelector;
