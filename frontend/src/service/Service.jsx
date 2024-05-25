import React, { useState, useEffect } from 'react';
import cities from './cities.json';

const apiKey = "7d51b8e551c4711d9f56d8f910d4bca1";

const Service = () => {
  const [weatherData, setWeatherData] = useState([]);
  const cityCodes = cities.List.map(city => city.CityCode).join(',');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes}&units=metric&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data.list);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    fetchWeatherData();
  }, [cityCodes]);

  return (
    <div>
      {weatherData.map(city => (
        <div key={city.id}>
          <h2>{city.name}</h2>
          <p>Temperature: {city.main.temp}°C</p>
          <p>Weather: {city.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default Service;
