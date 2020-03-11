import React from 'react';
import PropTypes from 'prop-types';
import Circle from '../Circle/Circle';
import './Circles.css';

const Circles = props => {
  return (
    <div className="main">
      <div className="circle-container" style={{ zIndex: 0 }}>
        <Circle size={'200px'} color1={'#ce4a55'} color2={'#ce814a'} min={0} max={25} />
      </div>
      <div className="circle-container" style={{ zIndex: 2 }}>
        <Circle size={'150px'} color1={'#ce4a55'} color2={'#ce814a'} color={'#e06711'} />
      </div>
      <div className="circle-container" style={{ zIndex: 3 }}>
        <Circle size={'125px'} color1={'#ce4a55'} color2={'#ce814a'} color={'#635d58'} />
      </div>
    </div>
  );
};

Circles.propTypes = {};

export default Circles;
