import { useState } from 'react';
import Home from './pages/home/Home';
import MoneyGame from './pages/money-game/MoneyGame';
import ControlButtons from './components/control-buttons/ControlButtons';
import ClickBalls from './pages/click-balls/ClickBalls';
import TheDisturbance from './pages/the-disturbance/TheDisturbance';
import Widgets from './components/widgets/Widgets';

function Main() {
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

  const [currentComponent, setCurrentComponent] = useState('Home');

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

  return (
    <div>
      {renderComponent()}
      <ControlButtons currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
      <Widgets />
    </div>
  );
}

export default Main;