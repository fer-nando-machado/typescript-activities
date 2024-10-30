import Activities from "./components/Activity";
import logo from "./assets/logo.png";
import "./App.scss";

function App() {
  return (
    <div id="App">
      <img src={logo} alt="Get Your Guide" />
      <h1>Activities</h1>
      <Activities />
    </div>
  );
}

export default App;
