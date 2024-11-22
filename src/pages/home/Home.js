import './Home.css';
import ClickToHide from '../../components/click-to-hide-screen/ClickToHide';
import GameCard from './components/game-card/GameCard';
import BouncingBalls from './components/bouncing-balls/BouncingBalls';
import NormalPopup from '../../components/windows/normal/NormalPopup';
import { useState } from 'react';
import BigWindow from '../../components/windows/big/BigWindow';
import Credits from './components/credits/Credits';

function Home({ setCurrentComponent }) {
    const [settingsVisible, setSettingsVisible] = useState(false);

    return (
        <>
            <BigWindow isVisible={settingsVisible} onClose={() => setSettingsVisible(false)}>
                <h1>Settings</h1>
                <p>Coming soon...</p>
            </BigWindow>

            <Credits />

            <div className="Home">
                <ClickToHide />
                <BouncingBalls />
                <button className={`SettingsButton transparent-button`} onClick={() => setSettingsVisible(true)}>⚙️</button>
                <div className='HomeContent'>
                    <GameCard image="/files/images/pictures/click-balls-logo.png" setCurrentComponent={setCurrentComponent} />
                    <GameCard image="/files/images/pictures/money-game-logo.png" setCurrentComponent={setCurrentComponent} />
                    <GameCard image="/files/images/pictures/the-disturbance-logo.png" setCurrentComponent={setCurrentComponent} />
                </div>

                <NormalPopup>
                    <h1>What's new?</h1>
                    <p>Hi, recently, we have released the a version of Shawny on the main branch and you can play it now from <a href="https://shawny.app/" target="_blank">here</a>. On this branch, we will be rebuilding the whole site in React JS, which will increase performances of the app while making the code more organized. Thank you for your support and if you wish to learn more about us, feel free to check our website at <a href="https://ecxogames.ca" target="_blank">our website</a>. Have a great day and happy gaming!</p>
                </NormalPopup>
            </div>
        </>
    );
}

export default Home;