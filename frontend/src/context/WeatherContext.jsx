import { createContext, useEffect, useState } from "react";
import cities from "./cities.json";

const WeatherContext = createContext();

export const WeatherCoProvider = ({ children }) => {
  const cityCodes = cities.List.map((city) => city.CityCode).join(",");
  const [weatherData, setWeatherData] = useState([]);
  const [lastFetchTime, setLastFetchTime] = useState(null);
  const apiKey = "7d51b8e551c4711d9f56d8f910d4bca1";
  const cacheDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes}&units=metric&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data.list);
        const fetchTime = Date.now();
        setLastFetchTime(fetchTime);
        localStorage.setItem("weatherData", JSON.stringify(data.list));
        localStorage.setItem("lastFetchTime", fetchTime);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    const shouldFetchData = () => {
      const savedFetchTime = localStorage.getItem("lastFetchTime");

      if (!savedFetchTime) {

        return true;

      } else {

        const currentTime = Date.now();
        const timeSinceLastFetch = currentTime - savedFetchTime;

        if (timeSinceLastFetch > cacheDuration) {
          return true;
        }
        return false;
      }
    };

    const loadCachedData = () => {

      const savedWeatherData = localStorage.getItem("weatherData");
      const savedFetchTime = localStorage.getItem("lastFetchTime");

      if (savedWeatherData && savedFetchTime) {

        setWeatherData(JSON.parse(savedWeatherData));
        setLastFetchTime(parseInt(savedFetchTime, 10));

      }
    };

    if (shouldFetchData()) {
      fetchWeatherData();
    } 
    else {
      loadCachedData();
    }

  }, [cityCodes]);

  

  return (
    <WeatherContext.Provider value={{ weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
