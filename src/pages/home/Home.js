// Shawny homepage
// Where all the fun cohexist


import ClickToHide from '../../components/click-to-hide-screen/ClickToHide';
import GameCard from './components/game-card/GameCard';
import BouncingBalls from './components/bouncing-balls/BouncingBalls';
import SmallWindow from '../../components/windows/small/SmallWindow';
import Account from '../account/Account';
import { useState } from 'react';

function Home({ setCurrentComponent }) {
    // Local storage data
    const userData = JSON.parse(localStorage.getItem("userData"));
    const deviceData = userData.deviceData;
    const firstLoad = deviceData.firstLoad;

    const [alertVisible, setAlertVisible] = useState(firstLoad);
    const [accountVisible, setAccountVisible] = useState(false);

    // Function to close the alert
    const closeAlert = () => {
        setAlertVisible(false);
        const updatedUserData = {
            ...userData,
            deviceData: {
                ...deviceData,
                firstLoad: false
            }
        };
        localStorage.setItem("userData", JSON.stringify(updatedUserData));
    }

    const closeAccount = () => {
        setAccountVisible(false);
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full">
            {accountVisible ? <Account method="signin" onClose={() => closeAccount()} /> : null}
            <div className="flex w-full h-full flex-row items-center justify-center">
                <ClickToHide />
                <BouncingBalls />

                <div className="fixed z-5 top-0 left-0 h-fit gap-4 w-full flex flex-row justify-end items-center p-2">
                    <button className="bg-none text-white" onClick={() => setAccountVisible(true)}>account</button>
                </div>
                
                <div className="grid grid-flow-col p-50 overflow-x-auto justify-start items-center snap-mandatory">
                    <GameCard image="/files/images/pictures/click-balls-logo.png" setCurrentComponent={setCurrentComponent} />
                    <GameCard image="/files/images/pictures/money-game-logo.png" setCurrentComponent={setCurrentComponent} />
                    <GameCard image="/files/images/pictures/the-disturbance-logo.png" setCurrentComponent={setCurrentComponent} />
                </div>

                {alertVisible ? <SmallWindow type="alert" title="Alert" onClose={() => closeAlert()}>
                    <p>
                        Hi, a new version of Shawny has been released on the main branch. It will be the last unofficial release. The team is working hard on developing a new version of Shawny.
                        You can see the published release <button className="bg-none border-none text-blue-600" onClick={() => window.open("https://shawny.app/", "_blank")}>here</button>. A lot of bugs are present on the current version and we are aware of it.
                        The official development will start on December 20 2024 and we will be posting frequently on the documentation page of our website. The team is currently remaking the site in React JS,
                        which will increase performances and make the code more organized for the community devs. Thank you for your support and if you wish to learn more about us and our development, feel free to check our website
                        at <button className="bg-none border-none text-blue-600" onClick={() => window.open("https://ecxogames.ca/", "_blank")}>ecxogames.ca</button>. Have a great day and happy gaming!
                    </p>
                </SmallWindow> : null}
            </div>
        </div>
    );
}

export default Home;