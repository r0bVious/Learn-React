import Search from "../search";
import { useState, useEffect } from "react";
import "./styles.css";

export default function Weather() {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${param}&appid=e59c6b203d2f7f34817066a81473f2b7`
      );
      const receivedData = await response.json();

      if (receivedData) {
        setWeatherData(receivedData);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWeatherData("Seoul");
  }, []);

  function handleSearch() {
    fetchWeatherData(searchQuery);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div className="weather-app">
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="weather-info-column">
              <p className="wind">{weatherData?.wind?.speed}</p>
              <p>Windspeed</p>
            </div>
            <div className="weather-info-column">
              <p className="humidity">{weatherData?.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
