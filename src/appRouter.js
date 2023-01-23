import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './component/header';
import SplashScreen from './component/splashScreen';
import LoadingOverlay from './common/overlay';
const Home = lazy(() => import('./container/home'));

const AppRouter = () => {
  return (
    <>
      <Router>
        {true && <Header />}
        {false && <LoadingOverlay />}
        <Suspense fallback={<SplashScreen />}>
          <Route exact path='/' component={Home}></Route>
        </Suspense>
      </Router>
    </>
  );
};

export default AppRouter;
