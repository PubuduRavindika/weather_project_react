import React, { useContext } from "react";
import './Home.css'
import Header from "../../components/Header/Header.jsx";
import Body from "../../components/Body/Body.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { assets } from "../../assets/assets.js";

const Home = () => {

  return (
    <div className="container">
      <div className="background">
        <img src={assets.background} alt="" />
        <div className="bg-dark"></div>
      </div>

      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
};

export default Home;

// <div>
    //   {weatherData.length === 0 ? (
    //     <p>Loading weather data...</p>
    //   ) : (
    //     weatherData.map(city => (
    //       <div key={city.id}>
    //         <h2>{city.name}</h2>
    //         <p>Temperature: {city.main.temp}°C</p>
    //         <p>Weather: {city.weather[0].description}</p>
    //       </div>
    //     ))
    //   )}
    // </div>