import { connect } from "react-redux";

import getCity from "../utils/getCity";

const CitySelector = (props) => {
  const { lng, selectedCommunity, selectedCity, dispatch } = props;
  const cities = getCity(selectedCommunity.id);
  return (
    <>
      <div>
        Selected city:{" "}
        {selectedCity !== null ? selectedCity.public_name[lng] : ""}
      </div>
      <ul>
        {cities.map((city) => (
          <li
            key={city.id}
            className="cursor-pointer hover:bg-gray-200"
            onClick={() => {
              dispatch({ type: "SET_STEP", step: 5 });
              dispatch({ type: "SET_CITY", city: city });
            }}
          >
            {city.public_name[lng]}
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
    selectedCommunity: state.selectedCommunity,
    selectedCity: state.selectedCity,
  };
}
export default connect(mapStateToProps)(CitySelector);
