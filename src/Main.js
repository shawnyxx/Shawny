// Main component that renders different games and pages
// It also handles the history of the components visited
// Still in development
// By Shawnyxx - [UNFINISHED]

// Import the required libraries
import { useState } from 'react';
import Home from './pages/home/Home';
import MoneyGame from './pages/money-game/MoneyGame';
import ControlButtons from './components/control-buttons/ControlButtons';
import ClickBalls from './pages/click-balls/ClickBalls';
import TheDisturbance from './pages/the-disturbance/TheDisturbance';
import Widgets from './components/widgets/Widgets';
import PreventZoom from './scripts/PreventZoom';

// Main component
function Main() {
  // State variables
  const [currentComponent, setCurrentComponent] = useState('Home');
  
  // Initialize the userData if not already set
  if (localStorage.getItem("userData") === null) {
    localStorage.setItem("userData", JSON.stringify({
      deviceData: {
        firstLoad: true,
        isLoggedIn: false
      },
      gamingData: {
        downloadedGames: [],
        minutesPlayed: 0
      }
    }));
  }

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Home':
        return <Home setCurrentComponent={setCurrentComponent} />;
      case 'MoneyGame':
        return <MoneyGame />;
      case 'ClickBalls':
        return <ClickBalls />;
      case 'TheDisturbance':
        return <TheDisturbance />;
      default:
        return <Home setCurrentComponent={setCurrentComponent} />;
      }
  }

  PreventZoom();

  return (
    <div className="fixed w-full h-full overflow-hidden">
      {renderComponent()}
      <ControlButtons currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
      <Widgets />
    </div>
  );
}

export default Main;