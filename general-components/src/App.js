import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/accordion";
import Modal from "./components/custom-modal-popup/modal";
import TabTest from "./components/custom-tabs/tab-test";
import GitHubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMore from "./components/load-more";
import NestedNavigation from "./components/nested-navigation";
import menus from "./components/nested-navigation/data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopBottom from "./components/scroll-to-top-and-bottom";
import SearchAutocomplete from "./components/search-autocomplete";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import Weather from "./components/weather-app/weather";

function App() {
  return (
    <div className="App">
      <Accordion />
      <Modal />
      <TabTest />
      <GitHubProfileFinder />
      <ImageSlider url={"https://picsum.photos/v2/list"} />
      <LightDarkMode />
      <LoadMore />
      <NestedNavigation menus={menus} />
      <QRCodeGenerator />
      <RandomColor />
      <ScrollIndicator />
      <ScrollToTopBottom />
      <SearchAutocomplete />
      <StarRating />
      <TicTacToe />
      <Weather />
      {/* Custom Hooks and Feature Flags, too */}
    </div>
  );
}

export default App;
