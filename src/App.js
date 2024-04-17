import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './components';
import { Home, WorkDetail } from './pages';

import './App.scss';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:workId" element={<WorkDetail />} />
    </Routes>
  </Router>
);

export default App;
