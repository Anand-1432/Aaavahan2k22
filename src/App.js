import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Aavahan2k19 from './pages/2k19/Aavahan2k19';
import Home from './pages/home/Home';
import EventPage from './pages/events/events';
import RuleBox from './pages/rule-box/rule-box';

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/2k19' element={<Aavahan2k19 />} />
        <Route path='/events' element={<EventPage />} />
        <Route path='/rules' element={<RuleBox />} />
      </Routes>
    </>
  );
};

export default App;
