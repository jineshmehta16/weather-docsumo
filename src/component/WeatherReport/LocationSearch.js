import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useWeather } from '../../context/weatherContext';

const LocationSearch = () => {
  const { setQuery } = useWeather();
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setQuery(event.target.value);
    }
  };
  return (
    <div>
      <div className='input-container'>
        <LocationOnIcon />
        <input
          placeholder='Search and Click Enter...'
          type='text'
          className='input-search-bar'
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default LocationSearch;
