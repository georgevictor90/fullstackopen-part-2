import React from "react";

const Weather = ({ name, temp, icon, windSpeed }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div>
      <h2>{name}</h2>
      <p>temperature {temp}</p>
      <img src={iconUrl} alt="" />
      <p>wind {windSpeed} m/s</p>
    </div>
  );
};

export default Weather;
