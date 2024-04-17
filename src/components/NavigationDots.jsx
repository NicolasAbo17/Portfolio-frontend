/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import { useLocation } from 'react-router-dom';

const NavigationDots = ({ active }) => {
  const location = useLocation();

  return (
    <div className="app__navigation">
      {['work', 'skills', 'contact'].map((item, index) => {
        if (item !== 'skills' || location.pathname === '/') {
          return (
            <a
              href={`#${item}`}
              key={item + index}
              className="app__navigation-dot"
              style={active === item ? { backgroundColor: '#313BAC' } : {}}
            />
          );
        }
        return null;
      })}
    </div>
  );
};


export default NavigationDots;
