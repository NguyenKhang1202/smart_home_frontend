import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import LayoutApp from '../components/layout/Layout';
import Loading from '../components/common/Loading';

const Home = lazy(() => import('../components/home/Home'));
const Room = lazy(() => import('../components/room/Rooms'));
const Device = lazy(() => import('../components/device/Devices'));

function MainAppRoutes(props) {
  console.log('main app route');
  return (
    <LayoutApp>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/devices" element={<Device />} />
        </Routes>
      </Suspense>
    </LayoutApp>
  );
}

export default MainAppRoutes;
