import React, { useState } from "react";
import Weather from "./Weather";
import "./App.css";
import Loader from "react-loader-spinner";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />

        <footer>
          <a href="https://github.com/inesber/weather-react" target="_blank">
            Open-Source Code
          </a>{" "}
          by Inês Bernardino
        </footer>
      </div>
    </div>
  );
}
