import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";
export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>
        <FormattedDate date={props.data.date} />
        <br />
        {props.data.description}
      </p>

      <div className="row mt-3 justify-content-center">
        <div className=".weather-icon col-4">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-4">
          <WeatherUnit temp={props.data.temperature} />
        </div>
        <div className="col-4 weather-features">
          <ul>
            <li>Temperature: {Math.round(props.data.temperature)}℃</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.windspeed)}Km/h</li>
            <li>Description: {props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
