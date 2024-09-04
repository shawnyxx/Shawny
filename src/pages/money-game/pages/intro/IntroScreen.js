
function IntroScreen({ setCurrentScreen }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full">
            <video className="fixed top-0 left-0 w-full h-full object-cover" src="/files/videos/money-game-prologue.mp4" autoPlay loop playInline onClick={() => setCurrentScreen('game')} />
        </div>
    );
}

export default IntroScreen;