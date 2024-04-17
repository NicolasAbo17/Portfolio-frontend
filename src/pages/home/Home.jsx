import React from 'react';
import { Skills, Works } from '../../container';
import { Footer } from '../../components';
import './Home.scss';

const Home = () => (
  <div className="app">
    <Works />
    <Skills />
    <Footer backgroundClass="app__primarybg" />
  </div>
);

export default Home;
