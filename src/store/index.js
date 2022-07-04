import { createAction, createReducer } from "@reduxjs/toolkit";

export const initialState = {
  lng: "en",
  selectedDistrict: null,
  selectedCity: null,
  selectedRegion: null,
  selectedCommunity: null,
  step: 0,
};

const setLng = createAction("SET_LNG");
const setDistrict = createAction("SET_DISTRICT");
const setCity = createAction("SET_CITY");
const setRegion = createAction("SET_REGION");
const setCommunity = createAction("SET_COMMUNITY");
const setStep = createAction("SET_STEP");

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLng, (state, action) => {
      state.lng = action.lng;
    })
    .addCase(setDistrict, (state, action) => {
      state.selectedDistrict = action.disctrict;
    })
    .addCase(setCity, (state, action) => {
      state.selectedCity = action.city;
    })
    .addCase(setRegion, (state, action) => {
      state.selectedRegion = action.region;
    })
    .addCase(setCommunity, (state, action) => {
      state.selectedCommunity = action.community;
    })

    .addCase(setStep, (state, action) => {
      state.step = action.step;
    });
});

export default reducer;
