import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>
        <FormattedDate date={props.data.date} />
        <br />
        {props.data.description}
      </p>

      <div className="row mt-3">
        <div className="col-6">
          <div className=".weather-icon">
            <WeatherIcon code={props.data.icon} />

            <span className="temp-figure">
              <strong>{Math.round(props.data.temperature)}</strong>℃
            </span>
          </div>
        </div>
        <div className="col-3 weather-features">
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
