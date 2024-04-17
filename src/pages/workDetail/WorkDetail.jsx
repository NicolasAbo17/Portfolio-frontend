import React from 'react';
import { Work } from '../../container';
import { Footer } from '../../components';
import './WorkDetail.scss';

const WorkDetail = () => (
  <div className="app">
    <Work />
    <Footer backgroundClass="app__whitebg" />
  </div>
);

export default WorkDetail;
