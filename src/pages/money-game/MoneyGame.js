import { useState } from 'react';
import PlayScreen from './pages/play-screen/PlayScreen';
import IntroScreen from './pages/intro/IntroScreen'

function MoneyGame() {
    const [gameState, setGameState] = useState('PlayScreen');

    let content;
    if (gameState === 'PlayScreen') {
        content = <PlayScreen />;
    } else if (gameState === 'IntroScreen') {
        content = <IntroScreen />;
    }
    
    return (
        <div>
            {content}
        </div>
    );
}

export default MoneyGame;