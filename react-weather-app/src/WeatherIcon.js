import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-day": "CLOUDY",
    "shower-rain-day": "RAIN",
    "rain-day": "RAIN",
    "thunderstorm-day": "RAIN",
    "snow-day": "SNOW",
    "mist-day": "FOG",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-night": "RAIN",
    "mist-night": "FOG",
    "rain-night": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-night": "SNOW",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="blue"
      size={64}
      animate={true}
    />
  );
}
