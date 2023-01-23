import React from 'react';
import './weatherReport.scss';
import LocationSearch from './LocationSearch';
import LocationInfoComponent from './LocationInfoComponent';
import TemperatureDetails from './TemperatureDetails';
import ForecastReport from './ForecastReport';
import Grid from '@mui/material/Grid';
import { useWeather } from '../../context/weatherContext';
import LoadingOverlay from '../../common/overlay';

const WeatherReport = () => {
  const { weatherState, query } = useWeather();
  const { realtimeData, forecastData } = weatherState || {};

  return (
    <div className='main-weather-report-container'>
      <Grid container>
        <Grid item xs={12} md={12}>
          <LocationSearch /> <br></br>
        </Grid>
      </Grid>
      {query && realtimeData && Object.keys(realtimeData)?.length > 0 ? (
        <Grid container>
          <Grid item xs={12} md={3}>
            <br></br> <br></br>
            <LocationInfoComponent />
          </Grid>
          <Grid item xs={12} md={3}>
            <br></br> <br></br>
            <TemperatureDetails />
          </Grid>
          <Grid item xs={12} md={6}>
            {query && forecastData && Object.keys(forecastData)?.length > 0 && <ForecastReport />}
          </Grid>
        </Grid>
      ) : (
        <LoadingOverlay />
      )}
    </div>
  );
};
export default WeatherReport;
