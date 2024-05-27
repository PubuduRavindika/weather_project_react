import { createContext, useEffect, useState } from "react";
import cities from "./cities.json"; // Adjust the path if necessary

const WeatherContext = createContext();

export const WeatherCoProvider = ({ children }) => {
  const cityCodes = cities.List.map((city) => city.CityCode).join(",");

  const [weatherData, setWeatherData] = useState([]);
  const apiKey = import.meta.env.REACT_APP_WEATHER_API_KEY;
  const apiUrl = import.meta.env.REACT_APP_WEATHER_API_URL;
  const cacheDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const fullApiUrl = `${apiUrl}?id=${cityCodes}&units=metric&appid=${apiKey}`;
        const response = await fetch(fullApiUrl);
        const data = await response.json();
        setWeatherData(data.list);

        const fetchTime = Date.now();
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
      }
    };

    if (shouldFetchData()) {
      fetchWeatherData();
    } else {
      loadCachedData();
    }
  }, [cityCodes, apiKey, apiUrl]);

  return (
    <WeatherContext.Provider value={{ weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
