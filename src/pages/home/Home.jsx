import React from 'react';
import { Skills, Works, Footer } from '../../container';
import './Home.scss';

const Home = () => (
  <div className="app">
    <Works />
    <Skills />
    <Footer />
  </div>
);

export default Home;
