import { useState } from "react";
import Home from "./pages/Home/Home";
import { WeatherCoProvider } from "./context/WeatherContext";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details/Details";

function App() {

  return (
    <>
      <div className="app">
        <WeatherCoProvider>
          <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/details/:id" element = {<Details/>} />
          </Routes>
        </WeatherCoProvider>
      </div>
    </>
  );
}

export default App;
