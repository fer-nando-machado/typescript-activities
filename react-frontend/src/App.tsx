import ActivityContainer from "./components/Activity/ActivityContainer";
import logo from "./assets/logo.png";
import "./App.scss";

function App() {
  return (
    <div id="App">
      <img src={logo} alt="Get Your Guide" />
      <h1>Activities</h1>
      <ActivityContainer />
    </div>
  );
}

export default App;
