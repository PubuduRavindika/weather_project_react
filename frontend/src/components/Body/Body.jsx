import React, { useContext } from "react";
import "./Body.css";
import { assets, weatherImages } from "../../assets/assets";
import WeatherContext from "../../context/WeatherContext";
import { Link } from "react-router-dom";

const Body = () => {
  const { weatherData } = useContext(WeatherContext);
  const backgroundColors = ["#388ee7", "#6249cc", "#40b681", "#de944e", "#9c3a3a"];

  return (
    <div className="app-body">
      <div className="col">
        {weatherData.map((city, index) => (
          <div className="weather">

            <Link to={`/details/${city.id}`}>
              
              <div className="top" style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}>
                <div className="city-div">
                  <h3>
                    {city.name}, {city.sys.country}
                  </h3>
                  <span>
                    {new Date(city.dt * 1000)
                      .toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .replace("AM", "am")
                      .replace("PM", "pm")}
                    , {new Date(city.dt * 1000).toDateString().slice(4)}
                  </span>
                  <div className="cloud-img">
                    <img src={weatherImages[city.weather[0].description]} alt="" />
                    <p>{city.weather[0].description}</p>
                  </div>
                </div>

                <div className="temp-div">
                <Link><img className="close"  src={assets.close} alt="" /></Link>
                  <h1>{city.main.temp}°C</h1>
                  <p>Temp Min: {city.main.temp_min}°C</p>
                  <p>Temp Max: {city.main.temp_max}°C</p>
                </div>
              </div>
              <div className="bottom">
                <div className="details-div">
                  <p>Pressure: {city.main.pressure}hPa</p>
                  <p>Humidity: {city.main.humidity}%</p>
                  <p>Visibility: {city.visibility / 1000}km</p>
                </div>

                <div className="details-middle-div">
                  <img src={assets.navigation} alt="" />
                  <p>
                    {city.wind.speed}m/s {city.wind.deg} Degree
                  </p>
                </div>

                <div className="details-div">
                  <p>
                    Sunrise:
                    {new Date(city.sys.sunrise * 1000)
                      .toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .replace("AM", "am")
                      .replace("PM", "pm")}
                  </p>
                  <p>
                    Sunset:
                    {new Date(city.sys.sunset * 1000)
                      .toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .replace("AM", "am")
                      .replace("PM", "pm")}
                  </p>
                </div>
              </div>
            </Link>
                      
          </div>
        ))}
        

        {/* <div className="weather">
            <div className="top">
              
              <div className="city-div">
                <h3>Colombo, LK</h3>
                <span>9.19am, Feb 8</span>
                <div className="cloud-img">
                  <img src={weatherImages["few clouds"]} alt=""/>
                  <p>Few Clouds</p>
                </div>
              </div>

              <div className="temp-div">
                <h1>27°C</h1>
                <p>Temp Min: 25°C</p>
                <p>Temp Max: 28°C</p>
              </div>

            </div>
            <div className="bottom">
              <div className="details-div">
                <p>Pressure: 1018hPa</p>
                <p>Humidity: 78%</p>
                <p>Visibility: 8.0km</p>
              </div>

              <div className="details-middle-div">
                <img src={assets.navigation} alt=""/>
                <p>4.0m/s 120 Degree</p>
              </div>

              <div className="details-div">
                <p>Sunrise: 6:05am</p>
                <p>Sunset: 6:05am</p>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Body;
