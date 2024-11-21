import React, { useState } from "react";
import './Game.css';
import PlayScreen from './components/play-screen/PlayScreen';

function MoneyGame() {
    const [currentScreen, setCurrentScreen] = useState("play-screen");
    const [gameStarted, setGameStarted] = useState(false);

    return (
        <div className="MoneyGame">
            <PlayScreen />
        </div>
    );
}

export default MoneyGame;