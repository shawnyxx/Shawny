import './IntroScreen.css';

function IntroScreen({ setCurrentScreen }) {
    return (
        <div className="IntroScreen">
            <video className="IntroVideo" src="/files/videos/money-game-prologue.mp4" autoPlay loop controls={false} onClick={() => setCurrentScreen('game')} />
        </div>
    );
}

export default IntroScreen;