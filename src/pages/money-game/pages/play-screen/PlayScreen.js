// Play Screen of the Money Game
// Shawnyxx - [UNFINISHED]

// Import the necessary modules.
import BgBlur from '../../../../components/background-blur/BgBlur';
import '../../../../index.css';
import Box from './components/box/Box';
import BigWindow from '../../../../components/windows/big/BigWindow';
import { useState } from 'react';

// Create the PlayScreen component.
function PlayScreen({ currentScreen, setCurrentScreen }) {
    // Create the state variables.
    const [isShowingCredits, setIsShowingCredits] = useState(false);
    
    return (
        <div className="flex flex-col justify-center items-center h-full w-full bg-black">
            <video className='w-screen h-screen object-cover' src="/files/videos/liberty-statue.mp4" autoPlay loop muted />
            <BgBlur>
                <p className={window.innerWidth > 1024 ? "text-[6rem] font-ralewayBlack text-white absolute top-4" : "text-[2rem] font-ralewayBlack text-white absolute top-4"}>the MONEY Game</p>
                <Box setIsShowingCredits={setIsShowingCredits} setCurrentScreen={setCurrentScreen} currentScreen={currentScreen} />

                {isShowingCredits ? (
                    <BigWindow onClose={() => setIsShowingCredits(false)}>
                    <div className="p-5 text-center">
                        <h1>About the devs</h1>

                        <p>The small team that currently develops shawny.app is part of a game development studio named ECXO
                            GAMES. This studio was first initiated in 2022 as a friend’s project but quickly gained
                            contributors. As of September 2024, the time this paragraph was written, ECXO GAMES is still in its
                            early steps. The two founders of ECXO created the studio just so they could have fun coding a game.
                            As of right now, bigger projects are planned for the year 2025 and 2026.</p>

                        <br />
                        <br />


                        <h1>Credits</h1>

                        <p>Lead Devs: S. Xavier C. L., Ryan S. Hernandez</p>
                        <p>Designers: Shan J., Louis R.</p>
                        <p>Artists: Navid S.</p>
                        <p>Contributor(s): Aniss S.</p>
                    </div>
                </BigWindow>
                ) : null}
            </BgBlur>
        </div>
    );
}

export default PlayScreen;