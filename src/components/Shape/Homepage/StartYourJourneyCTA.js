import React from 'react';

const StartYourJourneyCTA = () => {
  const shapeStyle = {
    position: 'absolute', // Positioning the shape using absolute positioning
    left: '319px',        // X position
    top: '235px',          // Y position
    width: '593px',       // Width
    height: '93px',      // Height
    backgroundColor: '#8D6145', // Background color
    borderRadius: '16px', // Corner radius
    opacity: 1,           // 100% opacity
    // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Drop shadow
    // overflowY: 'auto',    // Enable vertical scrolling
    zIndex: 40
  };

  return (
    <div style={shapeStyle}>
        <h1 className="text-white font-teachers_medium justify-center" 
          style={{
            textAlign: 'center',
            lineHeight: '100px', 
            letterSpacing: '0.5px', 
            fontSize: '35px',
            }}>START YOUR JOURNEY NOW
        </h1>

    </div>
  );
};

export default StartYourJourneyCTA;
