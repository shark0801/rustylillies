import './index.css';
import ScrollingBox from './components/Shape/Homepage/ScrollingBox'


function App() {

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-backgroundcolor_top 
      to-backgroundcolor_bottom z-10 shadow-inner flex items-center justify-center"></div>

<img 
        src="images/LandingPage_DeskPen.svg" 
        alt="Desk pen"
        style={{
          position: 'absolute',
          top: '298px', // Adjust as needed
          left: '1299px', // Adjust as needed
          width: '38px', // Adjust size as needed
          height: '388px', // Maintain aspect ratio
          zIndex: 50, // Lower z-index to be behind the ScrollingBox
        }}
      />

      <ScrollingBox />
    </div>
  );
}

export default App;


