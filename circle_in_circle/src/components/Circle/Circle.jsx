import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const checkNotNegative = degree => {
  if (degree < 0) {
    return 360 - degree;
  } else if (degree > 360) {
    return degree - 360;
  } else {
    return degree;
  }
};

const getGradient = (color1, color2, degree) => {};

const Circle = ({ size, color1, color2, min, max }) => {
  const circleRef = useRef();
  const startPos = useRef();
  const minVal = useRef(min || 0);
  const maxVal = useRef(max || 10);
  const [degrees, setDegrees] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  const [value, setValue] = useState(0);
  useEffect(() => {
    document.addEventListener('mouseup', mouseUpHandler);
  }, []);

  if (mouseDown === true) {
    if (document.clientY < startPos.current) {
      setDegrees(checkNotNegative(degrees - 20));
    } else {
      setDegrees(checkNotNegative(degrees + 20));
    }
  }

  // const mouseMoveHandler = e => {
  //   if (e.clientY < startPos.current) {
  //     setDegrees(checkNotNegative(degrees - 20));
  //   } else {
  //     setDegrees(checkNotNegative(degrees + 20));
  //   }
  // };

  const mouseUpHandler = e => {
    setMouseDown(false);
  };

  const mouseDownHandler = e => {
    startPos.current = e.clientY;
    setMouseDown(true);
  };
  return (
    <div
      ref={circleRef}
      onMouseDown={mouseDownHandler}
      style={{ width: size, height: size, borderRadius: '50%', background: `linear-gradient(${degrees}deg, ${color1},${color2})` }}
    ></div>
  );
};

Circle.propTypes = {};

export default Circle;
