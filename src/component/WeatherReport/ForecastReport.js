import React from 'react';
import { useWeather } from '../../context/weatherContext';
import Grid from '@mui/material/Grid';

const ForecastReport = () => {
  const { weatherState } = useWeather();
  const { forecastData } = weatherState || {};
  const { forecastday } = forecastData?.forecast || {};

  const getForecastFormattedDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toDateString();
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <h2 className='heading-forecast'>7 days forecast</h2>
        </Grid>
      </Grid>
      <Grid container className='text-center'>
        {forecastday?.map((ele) => {
          return (
            <>
              <Grid item xs={4} md={4}>
                <span>{getForecastFormattedDate(ele?.date)}</span>
              </Grid>
              <Grid item xs={4} md={4}>
                <div className='text-center'>
                  <img src={ele?.day?.condition?.icon} alt={ele?.day?.condition?.icon} />
                  {ele?.day?.condition?.text}
                </div>
              </Grid>
              <Grid item xs={4} md={4}>
                <span>
                  {ele?.day?.mintemp_c}&deg;/{ele?.day?.maxtemp_c}&deg;
                </span>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default ForecastReport;
