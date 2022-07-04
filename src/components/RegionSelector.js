import getRegions from "../utils/getRegions";
import { connect } from "react-redux";

const regions = getRegions();

const RegionSelector = (props) => {
  const { lng, selectedRegion, dispatch } = props;
  return (
    <>
      <div>
        Selected region:{" "}
        {selectedRegion !== null ? selectedRegion.public_name[lng] : ""}
      </div>
      <ul>
        {regions.map((region) => (
          <li
            key={region.id}
            className="cursor-pointer hover:bg-gray-200"
            onClick={() => {
              dispatch({ type: "SET_STEP", step: 2 });
              dispatch({ type: "SET_REGION", region: region });
            }}
          >
            {region.public_name[lng]}
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
    selectedRegion: state.selectedRegion,
  };
}

export default connect(mapStateToProps)(RegionSelector);
