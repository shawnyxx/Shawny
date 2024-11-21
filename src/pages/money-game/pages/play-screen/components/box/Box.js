import './Box.css';

function Box({ setIsShowingCredits, setCurrentScreen }) {
    return (
        <div className="MainBox">
            <div className="Box">
                <span>Welcome to <span className="TheMoneyGameText">the MONEY Game</span></span>
                <p>If you are new to the game, Money Game is a Life Simulator/Text-Based RPG<br />game that you can play on all devices.</p>
            </div>
            <div className="ButtonContainer">
                <button className="CreditsButton default-button" onClick={() => setIsShowingCredits(true)}>About the devs</button>
                <button className="PlayButton default-button" onClick={() => setCurrentScreen('intro')}>Play</button>
            </div>
        </div>
    );
}

export default Box;