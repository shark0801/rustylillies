import React from 'react';

const StartYourJourney = () => {
  const shapeStyle = {
    position: 'absolute', // Positioning the shape using absolute positioning
    left: '270px',        // X position
    top: '27px',          // Y position
    width: '674px',       // Width
    height: '405px',      // Height
    backgroundColor: '#FFFFFF', // Background color
    borderRadius: '16px', // Corner radius
    opacity: 1,           // 100% opacity
    boxShadow: '4px 0px 4px rgba(0, 0, 0, 0.5), 0px 4px 4px rgba(0, 0, 0, 0.5)', // Drop shadow
    // overflowY: 'auto',    // Enable vertical scrolling
    zIndex: 30
  };

  return (
    <div style={shapeStyle}>
      
    </div>
  );
};

export default StartYourJourney;
