import axios from "axios";
const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

const getWeather = async (city, country) => {
  try {
    const geoResponse = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${apiKey}`
    );
    const cityData = geoResponse.data[0];
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&units=metric&appid=${apiKey}`
    );
    return weatherResponse.data;
  } catch (error) {
    return error;
  }
};

export default { getWeather };
