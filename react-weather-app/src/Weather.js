import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      windspeed: response.data.wind.speed,
      description: response.data.condition.description,
    });
  }

  if (weatherData.ready) {
    return (
      <form>
        <div className="row">
          <input
            className="col-9 search-input"
            type="search"
            placeholder="Enter a city...."
          />
          <input
            className="btn btn-primary col-3 submit-input"
            type="submit"
            value="Search"
          />
        </div>

        <div>
          <h1>Lagos State</h1>
          <p>
            <FormattedDate date={weatherData.date} />
            <br />
            {weatherData.description}
          </p>
        </div>

        <div className="row mt-3">
          <div className="col-6">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png"
              alt={weatherData.description}
              className="weather-icon"
            ></img>
            <span className="temp-figure">
              <strong>{Math.round(weatherData.temperature)}</strong>℃
            </span>
          </div>
          <div className="col-3 weather-features">
            <ul>
              <li>Temperature: {Math.round(weatherData.temperature)}℃</li>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Wind: {Math.round(weatherData.windspeed)}Km/h</li>
              <li>Description: {weatherData.description}</li>
            </ul>
          </div>
        </div>
      </form>
    );
  } else {
    let apiKey = "320cd705ab886a9405df1ctoecfb9cc1";
    let city = "Lagos";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);

    return "Loading...";
  }
}
