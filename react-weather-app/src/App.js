import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="border">
          <Weather />
        </div>
        <div>
          <footer>
            This project is coded by Okeke Nneamaka and it is open-sourced.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
