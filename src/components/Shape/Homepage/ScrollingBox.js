import React from 'react';
import StartYourJourney from './StartYourJourney';
import StartYourJourneyCTA from './StartYourJourneyCTA';

const ScrollingBox = () => {
  const shapeStyle = {
    position: 'absolute', // Positioning the shape using absolute positioning
    left: '287px',        // X position
    top: '84px',          // Y position
    width: '971px',       // Width
    height: '881px',      // Height
    backgroundColor: 'rgba(203, 184, 175, 0.46)',
    borderRadius: '16px', // Corner radius
    boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.5), 0px 4px 10px rgba(0, 0, 0, 0.5)', // Drop shadow
    overflowY: 'auto',    // Enable vertical scrolling
    zIndex: 20,
    padding: '20px'
  };

  return (
    <div style={shapeStyle}>
      <StartYourJourney />
      <StartYourJourneyCTA />
    </div>
  );
};

export default ScrollingBox;
