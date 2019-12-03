import React from "react";
import FormatHour from "./FormatHour";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-12">
          <h1 className="current-city">{props.data.city}</h1>
          <ul className="day-and-time">
            <li className="date">
              <FormatDate date={props.data.date}></FormatDate>
            </li>
            <li className="hours">
              {" "}
              <FormatHour hour={props.data.hour}></FormatHour>
            </li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="weather-icon">
                <WeatherIcon code={props.data.icon} />
              </div>
              <p className="weather-quote">{props.data.description}</p>
            </div>

            <div className="col-6">
              <WeatherTemperature celsius={props.data.temperature} />

              <div className="wind-and-precipitation">
                <ul>
                  <li>
                    Wind: <span id="wind">{props.data.wind}</span> km/h
                  </li>
                  <li>
                    Humidity: <span id="humidity">{props.data.humidity}</span>%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
