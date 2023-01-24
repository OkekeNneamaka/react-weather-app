import React, { useState } from "react";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <span className="temp-figure">{Math.round(props.temp)}</span>
        <span className="units">
          ℃ |{""}
          <a href="/" onClick={convertToFarenheit}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (props.temp * 9) / 5 + 32;
    return (
      <div>
        <span className="temp-figure">{Math.round(farenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            {" "}
            ℃ |
          </a>
          {""}℉
        </span>
      </div>
    );
  }
}
