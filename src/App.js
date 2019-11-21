import React from "react";
import "./App.css";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello </h1>
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        <a href="https://github.com/inesber/weather-react" target="_blank">
          Open-Source Code
        </a>{" "}
        by Inês Bernardino
      </header>
    </div>
  );
}

export default App;
