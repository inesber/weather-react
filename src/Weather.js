import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app">
            <div className="row">
              <div className="col-12">
                <h1 className="current-city">{weatherData.city}</h1>
                <div className="row">
                  <div className="col-6">
                    <img
                      className="weather-icon"
                      src={weatherData.icon}
                      alt={weatherData.description}
                    />
                    <p className="weather-quote text-capitalize">
                      {weatherData.description}
                    </p>
                  </div>

                  <div className="col-6">
                    <div className="current-temperature">
                      {Math.round(weatherData.temperature)}
                      <span className="unit">ºC</span>
                    </div>
                    <ul className="day-and-time">
                      <li className="date">20 November 2019</li>
                      <li className="hours">Wednesday, 21:55</li>
                    </ul>
                    <div className="wind-and-precipitation">
                      <ul>
                        <li>
                          Wind: <span id="wind">{weatherData.wind}</span> km/h
                        </li>
                        <li>
                          Humidity:{" "}
                          <span id="humidity">{weatherData.humidity}</span>%
                        </li>
                      </ul>
                    </div>
                  </div>
                  <form>
                    <input
                      type="search"
                      placeholder="Type a city..."
                      autocomplete="off"
                      class="search-bar"
                      id="search-input"
                    />{" "}
                    <input
                      type="submit"
                      placeholder="search"
                      class="btn btn-outline-primary"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e54c84c12b5edaf88f0fd0625ac73988";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
