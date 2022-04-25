import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MarketPlace from '../pages/MarketPlace';
import Profile from '../pages/Profile';

function Router() {
  return (
    <Routes>
      <Route path='/marketplace' element={<MarketPlace />} />
      <Route path='/' element={<Profile />} />
    </Routes>
  );
}

export default Router;
