import React from "react";

export default function FormatDate(props) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let day = props.date.getDay();
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  return `${day} ${month} ${year}`;
}
