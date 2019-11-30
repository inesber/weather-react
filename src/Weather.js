import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      hour: new Date(response.data.dt * 1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description
    });
  }

  function search() {
    const apiKey = "e54c84c12b5edaf88f0fd0625ac73988";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app">
            <WeatherInfo data={weatherData} />
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Type a city..."
                  autoComplete="off"
                  className="search-bar"
                  id="search-input"
                  onChange={handleCityChange}
                />{" "}
                <input
                  type="submit"
                  placeholder="search"
                  className="btn btn-outline-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
