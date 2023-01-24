import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      name: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      windspeed: response.data.wind.speed,
      description: response.data.condition.description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "320cd705ab886a9405df1ctoecfb9cc1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              className="search-input col-9"
              type="search"
              placeholder="Enter a city...."
              onChange={updateCity}
            />

            <input
              className="btn btn-primary submit-input col-3"
              type="submit"
              value="Search"
            />
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
