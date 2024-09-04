
function Box({ setIsShowingCredits, setCurrentScreen }) {
    // Styles
    const box = window.innerWidth > 1024 ? "bg-black border border-white rounded flex justify-center items-center p-[10px] flex-col text-center w-[50vw] h-[150px]" : "bg-black border border-white rounded flex justify-center items-center p-[10px] flex-col text-center w-[90vw] h-[150px]";
    const buttonContainer = "flex justify-center items-center gap-[10px] -translate-y-[35px]";
    const theMoneyGameText = "font-ralewayBlack whitespace-nowrap";
    const mainBox = "flex justify-center items-center flex-col gap-[10px]";
    
    return (
        <div className={mainBox}>
            <div className={box}>
                <span>Welcome to <span className={theMoneyGameText}>the MONEY Game</span></span>
                <p>If you are new to the game, Money Game is a Life Simulator/Text-Based RPG<br />game that you can play on all devices.</p>
            </div>
            <div className={buttonContainer}>
                <button className="bg-black min-w-32 p-2 border border-white rounded text-white" onClick={() => setIsShowingCredits(true)}>About the devs</button>
                <button className="bg-black min-w-32 p-2 border border-white rounded text-white" onClick={() => setCurrentScreen('intro')}>Play</button>
            </div>
        </div>
    );
}

export default Box;