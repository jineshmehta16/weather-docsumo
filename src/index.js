import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './appRouter';
import { WeatherProvider } from './context/weatherContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherProvider>
      <AppRouter />
    </WeatherProvider>
  </React.StrictMode>,
);
