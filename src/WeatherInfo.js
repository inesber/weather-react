import React from "react";
import FormatHour from "./FormatHour";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-12">
          <h1 className="current-city">{props.data.city}</h1>
          <div className="row">
            <div className="col-6">
              <img
                className="weather-icon"
                src={props.data.icon}
                alt={props.data.description}
              />
              <p className="weather-quote text-capitalize">
                {props.data.description}
              </p>
            </div>

            <div className="col-6">
              <WeatherTemperature celsius={props.data.temperature} />

              <ul className="day-and-time">
                <li className="date">
                  <FormatDate date={props.data.date}></FormatDate>
                </li>
                <li className="hours">
                  {" "}
                  <FormatHour hour={props.data.hour}></FormatHour>
                </li>
              </ul>
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
