import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  lng: "en",
  selectedDistrict: null,
  selectedCity: null,
  selectedRegion: null,
  selectedCommunity: null,
};

const setLng = createAction("SET_LNG");
const setDistrict = createAction("SET_DISTRICT");
const setCity = createAction("SET_CITY");
const setRegion = createAction("SET_REGION");
const setCommunity = createAction("SET_COMMUNITY");

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLng, (state, action) => {
      console.log(action);
      state.lng = action.lng;
    })
    .addCase(setDistrict, (state, action) => {
      state.selectedDistrict = action.payload;
    })
    .addCase(setCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setRegion, (state, action) => {
      state.selectedRegion = action.payload;
    })
    .addCase(setCommunity, (state, action) => {
      state.selectedCommunity = action.payload;
    });
});

export default reducer;
