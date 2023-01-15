import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container border rounded p-4">
        <Weather defaultCity="Lagos" />
      </div>
      <div className="footer">
        <footer>
          This project is coded by Okeke Nneamaka and it's open-sourced.
        </footer>
      </div>
    </div>
  );
}

export default App;
