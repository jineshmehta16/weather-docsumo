import axios from 'axios';

export async function getCurrentWeather(query) {
  try {
    return await axios.get(
      `${process.env.REACT_APP_API_WEATHER_REALTIME}?key=${process.env.REACT_APP_API_KEY}&q=${query}`,
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getForecastWeather(query, days = '7', aqi = 'yes', alerts = 'yes') {
  try {
    return await axios.get(
      `${process.env.REACT_APP_API_WEATHER_FORECAST}?key=${process.env.REACT_APP_API_KEY}&q=${query}&days=${days}&aqi=${aqi}&alerts=${alerts}`,
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getWeather(query, days, aqi, alerts) {
  try {
    const currentWeatherData = await getCurrentWeather(query).then((res) => res);
    const forecastWeatherData = await getForecastWeather(query, days, aqi, alerts).then(
      (res) => res,
    );
    return { currentWeatherData, forecastWeatherData };
  } catch (error) {
    console.log(error);
  }
}
