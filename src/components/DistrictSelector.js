import { connect } from "react-redux";
import getDistricts from "../utils/getDisctricts";

const DiscrictSelector = (props) => {
  const { lng, selectedRegion, selectedDistrict, dispatch } = props;
  const disctricts = getDistricts(selectedRegion.id);

  return (
    <>
      <div>
        Selected disctrict:{" "}
        {selectedDistrict !== null ? selectedDistrict.public_name[lng] : ""}
      </div>
      <ul>
        {disctricts.map((disctrict) => (
          <li
            key={disctrict.id}
            className="cursor-pointer hover:bg-gray-200"
            onClick={() => {
              dispatch({ type: "SET_STEP", step: 3 });
              dispatch({ type: "SET_DISTRICT", disctrict: disctrict });
            }}
          >
            {disctrict.public_name[lng]}
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
    selectedDistrict: state.selectedDistrict,
  };
}

export default connect(mapStateToProps)(DiscrictSelector);
