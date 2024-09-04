import './Home.css';
import ClickToHide from '../../components/click-to-hide-screen/ClickToHide';
import GameCard from './components/game-card/GameCard';
import BoucingBalls from './components/bouncing-balls/BouncingBalls';
import ControlButtons from '../../components/control-buttons/ControlButtons';

function Home({ setCurrentComponent }) {    
    return (
        <div className="Home">
            <ClickToHide />
            
            <BoucingBalls />
            
            <div className='HomeContent'>
                <GameCard image="/files/images/pictures/click-balls-logo.png" setCurrentComponent={setCurrentComponent} />
                <GameCard image="/files/images/pictures/money-game-logo.png" setCurrentComponent={setCurrentComponent} />
                <GameCard image="/files/images/pictures/the-disturbance-logo.png" setCurrentComponent={setCurrentComponent} />
            </div>
        </div>
    );
}

export default Home;