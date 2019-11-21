import React from "react";
import "./App.css";
import Loader from "react-loader-spinner";

function App() {
  let weatherData = {
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: "15ºC",
    date: "20 November 2019",
    hours: "Wednesday, 21:55",
    city: "Lisbon",
    description: "Cloudy"
  };

  return (
    <div className="App">
      <div className="container">
        <div className="container">
          <div className="weather-app">
            <div className="row">
              <div className="col-12">
                <h1 className="current-city">{weatherData.city}</h1>
                <div className="row">
                  <div className="col-6">
                    <img className="weather-icon" src={weatherData.iconUrl} />
                    <p className="weather-quote">{weatherData.description}</p>
                  </div>

                  <div className="col-6">
                    <div className="current-temperature">
                      {weatherData.temperature}
                    </div>

                    <ul className="day-and-time">
                      <li className="date">{weatherData.date}</li>
                      <li className="hours">{weatherData.hours}</li>
                    </ul>
                    <div className="wind-and-precipitation">
                      <ul>
                        <li>
                          Wind:
                          <span id="wind">18</span> km/h
                        </li>
                        <li>
                          Humidity:
                          <span id="humidity">0</span>%
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <form>
                  <input
                    type="search"
                    placeholder="Type a city..."
                    autocomplete="off"
                    class="search-bar"
                    id="search-input"
                  />
                  <input
                    type="submit"
                    placeholder="search"
                    class="btn btn-outline-primary"
                  />
                </form>
              </div>
            </div>
            <p>
              <a href="https://github.com/inesber/weather-app" target="_blank">
                Open-Source Code
              </a>
              by Inês Bernardino
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
