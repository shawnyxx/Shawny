import './Box.css';
import BigWindow from '../../../../../../components/windows/big/BigWindow';

function Box({ setIsShowingCredits }) {
    return (
        <div className="MainBox">
            <div className="Box">
                <span>Welcome to <span className="TheMoneyGameText">the MONEY Game</span></span>
                <p>If you are new to the game, Money Game is a Life Simulator/Text-Based RPG<br />game that you can play on all devices.</p>
            </div>
            <div className="ButtonContainer">
                <button className="CreditsButton" onClose={() => setIsShowingCredits(false)} onClick={() => setIsShowingCredits(true)}>About the devs</button>
                <button className="PlayButton" disabled>Play</button>
            </div>
        </div>
    );
}

export default Box;