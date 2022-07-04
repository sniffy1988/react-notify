import "./App.css";
import CitySelector from "./components/CitySelector";
import CommunitySelector from "./components/CommunitySelector";
import DiscrictSelector from "./components/DistrictSelector";
import LanguageSelector from "./components/LanguageSelector";
import RegionSelector from "./components/RegionSelector";
import { connect } from "react-redux";
import AlertStatus from "./components/AlertStatus";

function App(props) {
  const { step } = props;
  const currentStepComponent = () => {
    switch (step) {
      case 0:
        return <LanguageSelector />;
      case 1:
        return <RegionSelector />;
      case 2:
        return <DiscrictSelector />;
      case 3:
        return <CommunitySelector />;
      case 4:
        return <CitySelector />;
      default:
        return <AlertStatus />;
    }
  };

  return (
    <div className="App container mx-auto p-4">{currentStepComponent()}</div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    step: state.step,
  };
}

export default connect(mapStateToProps)(App);
