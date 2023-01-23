import { createContext, useContext, useEffect, useState } from 'react';
import { getWeather } from '../services/weatherServices';

const weatherContext = createContext(null);

const weatherInitialState = {
  realtimeData: {},
  forecastData: {},
};
const WeatherProvider = ({ children }) => {
  const [weatherState, setWeatherState] = useState(weatherInitialState);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) getWeatherData(query);
    else {
      if (navigator.geolocation) {
        navigator.geolocation?.getCurrentPosition((loc) => {
          setQuery(`${loc.coords.latitude},${loc.coords.longitude}`);
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    }
  }, [query]);

  const getWeatherData = () => {
    setWeatherState({
      ...weatherState,
      realtimeData: {},
    });
    getWeather(query).then((res) => {
      setWeatherState({
        ...weatherState,
        realtimeData: res?.currentWeatherData?.data,
        forecastData: res?.forecastWeatherData?.data,
      });
    });
  };

  return (
    <weatherContext.Provider value={{ weatherState, setWeatherState, setQuery, query }}>
      {children}
    </weatherContext.Provider>
  );
};

const useWeather = () => useContext(weatherContext);

export { useWeather, WeatherProvider };
