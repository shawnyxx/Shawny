import { useState } from 'react';
import './Main.css';
import Home from './pages/home/Home';
import MoneyGame from './pages/money-game/MoneyGame';
import ControlButtons from './components/control-buttons/ControlButtons';
import ClickBalls from './pages/click-balls/ClickBalls';
import TheDisturbance from './pages/the-disturbance/TheDisturbance';

function Main() {
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
    <div className="Main">
      {renderComponent()}
      <ControlButtons currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
    </div>
  );
}

export default Main;