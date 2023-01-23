import React from 'react';
import './overlay.scss';
import { CircularProgress } from '@mui/material';

const LoadingOverlay = () => {
  return (
    <div className='overlay'>
      <div className='center'>
        <CircularProgress color='secondary' />
      </div>
    </div>
  );
};
export default LoadingOverlay;
