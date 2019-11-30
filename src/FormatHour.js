import React from "react";

export default function FormatHour(props) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = weekDays[props.hour.getDay()];
  let hours = props.hour.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.hour.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let month = props.hour.getMonth();
  return `${day}, ${hours}:${minutes}`;
}
