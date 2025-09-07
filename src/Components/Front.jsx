import React, { useState, useEffect } from 'react';
import './front.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import rain_icon from '../assets/rain.png';
import clouds_icon from '../assets/cloud.png';
import humidity from '../assets/humidity.png';
import wind from '../assets/wind.png';
import snow_icon from '../assets/snow.png';

const Front = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = "3a1851de2ab40a41b4838db70c9efca9";
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      console.log("Weather API Response:", data);

      if (data.cod !== 200) {
        alert(data.message || "City not found");
        setWeather(null);
        return;
      }

      setWeather(data);
      setBackground(data.weather[0].main.toLowerCase()); // 👈 background set
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Function to set body background
  

    const setBackground = (main) => {
  if (main.includes("clouds")) {
    document.body.style.backgroundImage = "url('/backgrounds/Clouds.jpg')";
  } else if (main.includes("rain")) {
    document.body.style.backgroundImage = "url('/backgrounds/rain.jpg')";
  } else if (main.includes("snow")) {
    document.body.style.backgroundImage = "url('/backgrounds/snow.jpg')";
  } else {
    document.body.style.backgroundImage = "url('/backgrounds/clear.jpg')";
  }

  document.body.style.backgroundSize = "cover"; 
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
};

  // Function to select icon
  const getWeatherIcon = () => {
    if (!weather || !weather.weather) return clear_icon;

    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("cloud")) return clouds_icon;
    if (main.includes("rain")) return rain_icon;
    if (main.includes("snow")) return snow_icon;
    if (main.includes("mist") || main.includes("haze")) return clouds_icon;
    return clear_icon;
  };

  return (
    <div>
      <div className='Weather_main'>
        <div className='Search_bar'>
          <input
            type="text"
            placeholder="Search The City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          />
          <img
            src={search_icon}
            alt="search"
            onClick={fetchWeather}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className='Clear'>
          <img src={getWeatherIcon()} alt="weather icon" />
        </div>

        {weather && weather.main ? (
          <>
            <div className="Temperature">{Math.round(weather.main.temp)}°C</div>
            <div className="City">{weather.name}
              <div className="country">{weather.sys.country}</div>
            </div>

            <div className='common'>
              <div className="weather-details">
                <div className="detail-item">
                  <img src={humidity} alt="humidity icon" />
                  <h3>{weather.main.humidity}% Humidity</h3>
                </div>
                <div className="detail-item">
                  <img src={wind} alt="wind icon" />
                  <h3>{weather.wind.speed} Km/h Wind Speed</h3>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="Temperature">---°C</div>
        )}
      </div>
    </div>
  );
};

export default Front;
