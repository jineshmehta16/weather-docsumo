import React from 'react';
import { useWeather } from '../../context/weatherContext';

const LocationInfoComponent = () => {
  const { weatherState } = useWeather();
  const { realtimeData } = weatherState || {};
  const { localtime, name, country } = realtimeData?.location || {};
  const { icon } = realtimeData?.current?.condition || {};

  const constructFormattedDate = () => {
    const date = new Date(localtime);
    return `${date.toDateString()} | Time: ${date.getHours()}:${date.getMinutes()}`;
  };
  return (
    <div>
      <div className='country-name-info'>
        {name}, {country}
      </div>
      <div className='temp-icon-container'>
        <img src={icon} alt='temp-icon' />
      </div>
      <div>
        <div className='current-date-info'>{constructFormattedDate()}</div>
      </div>
    </div>
  );
};

export default LocationInfoComponent;
