import React, { useEffect, useState } from "react";
import weatherServices from "../services/weather";
import Weather from "./Weather";

const Country = ({ country }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);
  const [lat, lng] = country.latlng;

  const languages = Object.keys(country.languages).map((key) => (
    <li key={key}>{country.languages[key]}</li>
  ));

  useEffect(() => {
    weatherServices
      .getWeather(country.capital, country.name.common)
      .then((data) =>
        setWeatherInfo({
          temp: data.main.temp,
          windSpeed: data.wind.speed,
          icon: data.weather[0].icon,
        })
      )
      .catch((error) => setError("There was a problem fetching the weather"));
  }, []);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>
        area {country.area} km<sup>2</sup>
      </p>
      languages:
      <ul>{languages}</ul>
      <img
        src={country.flags.svg}
        width={300}
        alt={`Flag of ${country.name.common}`}
      />
      {weatherInfo ? (
        <Weather
          name={country.capital}
          temp={weatherInfo.temp}
          icon={weatherInfo.icon}
          windSpeed={weatherInfo.windSpeed}
        />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Fetching weather...</p>
      )}
    </div>
  );
};

export default Country;
