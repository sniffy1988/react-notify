import React, { useReducer } from "react";
import reducer from "../store";

const LanguageSelector = () => {
  const [state, dispatch] = useReducer(reducer, {
    lng: "uk",
  });
  return (
    <>
      <div>Selected language: {state.lng}</div>
      <ul>
        <li onClick={() => dispatch({ type: "SET_LNG", lng: "en" })}>EN</li>
        <li onClick={() => dispatch({ type: "SET_LNG", lng: "ru" })}>RU</li>
        <li onClick={() => dispatch({ type: "SET_LNG", lng: "uk" })}>UK</li>
      </ul>
      <hr />
    </>
  );
};

export default LanguageSelector;
