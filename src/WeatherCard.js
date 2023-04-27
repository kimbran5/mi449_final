import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherCard.css';

function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Get user's location
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        console.error(error);
      }
    );
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      // Make weather API call
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=0dc67f431745a6b09949fa3377a8d841`)
        .then(response => {
          setWeather(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [latitude, longitude]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  const { main, weather: weatherDetails } = weather;

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <div className="city">{weather.name}</div>
        <div className="temperature">{Math.round(main.temp)} &deg;F</div>
      </div>
      <div className="weather-card-body">
        <div className="description">{weatherDetails[0].description}</div>
        <div className="details">
          <div>Feels Like: {Math.round(main.feels_like)} &deg;F</div>
          <div>Humidity: {main.humidity}%</div>
          <div>Wind: {Math.round(weather.wind.speed)} mph</div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
