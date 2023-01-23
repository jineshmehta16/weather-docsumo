import React from 'react';
import { useWeather } from '../../context/weatherContext';
import { WindIcon, PrecipitationIcon, PressureIcon, HumidityIcon } from '../../assets';
const TemperatureDetails = () => {
  const { weatherState } = useWeather();
  const { realtimeData } = weatherState || {};
  const { wind_kph, pressure_mb, precip_mm, humidity, temp_c } = realtimeData?.current || {};
  const { text } = realtimeData?.current?.condition || {};

  return (
    <div className='temp-wrapper'>
      <div className='current-temp-block'>
        <div className='temperature'>{temp_c}&deg;</div>
        <div>{text}</div>
      </div>
      <div className='line'></div>
      <div className='more-info-row'>
        <div className='data'>
          <div>
            <img src={WindIcon} alt='icon' />
          </div>
          <div className='data-text'>
            <div>Wind</div>
            <div>{wind_kph}km/h</div>
          </div>
        </div>
        <div className='data'>
          <div>
            <img src={PrecipitationIcon} alt='icon' />
          </div>
          <div className='data-text'>
            <div>Precipitation</div>
            <div>{precip_mm} mm</div>
          </div>
        </div>
      </div>
      <div className='more-info-row'>
        <div className='data'>
          <div>
            <img src={PressureIcon} alt='icon' />
          </div>
          <div className='data-text'>
            <div>Presure</div>
            <div>{pressure_mb} mbar</div>
          </div>
        </div>
        <div className='data'>
          <div>
            <img src={HumidityIcon} alt='icon' />
          </div>
          <div className='data-text'>
            <div>Humidity</div>
            <div>{humidity}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureDetails;
