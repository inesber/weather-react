import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  function formatHours(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  if (loaded && forecast.city.name === props.city) {
    return (
      <div className="ForecastHeader">
        <p>In the next hours</p>
        <div className="Forecast row">
          {forecast.list.slice(0, 5).map(function(weather) {
            return (
              <div classname="col">
                {formatHours(new Date(weather.dt * 1000))}
                <WeatherIcon code={weather.weather[0].icon} />
                {Math.round(weather.main.temp)}ºC
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "e54c84c12b5edaf88f0fd0625ac73988";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
