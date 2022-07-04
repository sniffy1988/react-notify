import { connect } from "react-redux";

const LanguageSelector = (props) => {
  const { lng, dispatch } = props;
  const codes = [
    { code: "uk", name: "Українська" },
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
  ];
  return (
    <>
      <div>Selected language: {lng}</div>
      <ul>
        {codes.map((code) => (
          <li
            key={code.code}
            className="cursor-pointer hover:bg-gray-200"
            onClick={() => {
              dispatch({ type: "SET_STEP", step: 1 });
              dispatch({ type: "SET_LNG", lng: code.code });
            }}
          >
            {code.name}
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
  };
}
export default connect(mapStateToProps)(LanguageSelector);
