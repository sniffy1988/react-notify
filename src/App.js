import "./App.css";
import CitySelector from "./components/CitySelector";
import CommunitySelector from "./components/CommunitySelector";
import DiscrictSelector from "./components/DistrictSelector";
import LanguageSelector from "./components/LanguageSelector";
import RegionSelector from "./components/RegionSelector";

function App() {
  return (
    <div className="App container mx-auto px-4">
      <LanguageSelector />
      <RegionSelector />
      <DiscrictSelector />
      <CommunitySelector />
      <CitySelector />
    </div>
  );
}

export default App;
