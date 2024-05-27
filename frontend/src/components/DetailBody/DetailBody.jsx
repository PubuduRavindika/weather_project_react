import React, { useContext } from "react";
import "./DetailBody.css";
import { assets, weatherImages } from "../../assets/assets";
import WeatherContext from "../../context/WeatherContext";
import { Link, useParams } from "react-router-dom";

const DetailBody = () => {
  const { weatherData } = useContext(WeatherContext);
  const params = useParams();
  const cityId = params.id;

  return (
    <div className="app-body">
      <div className="col-det">
        {weatherData.map((city) => {
          if (city.id == cityId) {
            return (
              <div className="weather">
                <div className="top">
                  <Link to={"/"}>
                    <img className="back" src={assets.back} />
                  </Link>
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
                  </div>

                  <div className="temp-div temp-dev-detals">
                    <div className="cloud-img">
                      <img
                        src={weatherImages[city.weather[0].description]}
                        alt=""
                      />
                      <p>{city.weather[0].description}</p>
                    </div>

                    <div className="cloud-temp">
                      <h1>{city.main.temp}°C</h1>
                      <p>Temp Min: {city.main.temp_min}°C</p>
                      <p>Temp Max: {city.main.temp_max}°C</p>
                    </div>
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
                      Sunrise:{" "}
                      {new Date(city.sys.sunrise * 1000)
                        .toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                        .replace("AM", "am")
                        .replace("PM", "pm")}
                    </p>
                    <p>
                      Sunset:{" "}
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
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default DetailBody;
