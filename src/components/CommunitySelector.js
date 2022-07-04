import { connect } from "react-redux";

import getCommunity from "../utils/getCommunity";

const CommunitySelector = (props) => {
  const { lng, selectedDistrict, selectedCommunity, dispatch } = props;
  const communities = getCommunity(selectedDistrict.id);
  return (
    <>
      <div>
        Selected Community:{" "}
        {selectedCommunity !== null ? selectedCommunity.public_name[lng] : ""}
      </div>

      <ul>
        {communities.map((community) => (
          <li
            key={community.id}
            className="cursor-pointer hover:bg-gray-200"
            onClick={() => {
              dispatch({ type: "SET_STEP", step: 4 });
              dispatch({ type: "SET_COMMUNITY", community: community });
            }}
          >
            {community.public_name[lng] === ""
              ? community.public_name["uk"]
              : community.public_name[lng]}
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
};
function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    lng: state.lng,
    selectedDistrict: state.selectedDistrict,
    selectedCommunity: state.selectedCommunity,
  };
}
export default connect(mapStateToProps)(CommunitySelector);
