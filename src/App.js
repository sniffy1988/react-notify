import "./App.css";
import CitySelector from "./components/CitySelector";
import CommunitySelector from "./components/CommunitySelector";
import DiscrictSelector from "./components/DistrictSelector";
import LanguageSelector from "./components/LanguageSelector";
import RegionSelector from "./components/RegionSelector";
import { connect } from "react-redux";
import AlertStatus from "./components/AlertStatus";
import showNotification from "./chrome/content";
import { useState } from "react";

function App(props) {
  const { step, dispatch } = props;
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  if (step < 5) {
    if (!isNotificationShown) {
      dispatch({ type: "SET_STEP", step: 0 });
      showNotification("Set your location");
      setIsNotificationShown(true);
    }
  }
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
    <div className="App container mx-auto p-4">
      <ol>
        <li>Check if position set up if not - show notification</li>
        <li>If position already set = show last status</li>
      </ol>
      {currentStepComponent()}
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    step: state.step,
  };
}

export default connect(mapStateToProps)(App);
