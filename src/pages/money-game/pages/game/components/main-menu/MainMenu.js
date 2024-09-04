// Main Menu component for the Money Game
// This component is the main menu for the Money Game
// Shawnyxx - [UNFINISHED]

import React from "react";

function MainMenu({ setRenderedComponent }) {
  // Styling
  const MainMenu = "w-full h-full fixed";
  const MainMenuContent = "fixed w-full h-full z-20 flex flex-col bg-black bg-opacity-50 backdrop-blur-md text-white";
  const MainMenuTitle = "w-full h-1/4 flex flex-row items-center justify-center text-center";
  const MainMenuWhatsNew = "w-full h-2/4 overflow-y-auto flex flex-col text-white items-center justify-start";
  const MainMenuButtonContainer = "w-full h-1/4 flex flex-col justify-center items-center";
  const MainMenuPlayButton = "bg-black border border-white rounded min-w-[250px] p-[15px] text-white";
  const MainMenuNewYorkMap = "fixed z-10 w-full h-full object-cover";
  const MainMenuTitleText = window.innerWidth > 1024 ? "text-[4rem] font-ralewayBlack" : "text-[2rem] font-ralewayBlack";
  const TextLarge = "text-lg";

  // Return the MainMenu component
  return (
    <div className={MainMenu}>
      <img src="/files/images/pictures/money-game/new-york-map.png" className={MainMenuNewYorkMap} />
      <div className={MainMenuContent}>
        <div className={MainMenuTitle}>
          <p className={MainMenuTitleText}>the MONEY Game</p>
        </div>

        <div className={MainMenuWhatsNew}>
          <p className={TextLarge}>What's new?</p>
          <p>Nothing</p>
        </div>

        <div className={MainMenuButtonContainer}>
          <button className={MainMenuPlayButton} onClick={() => setRenderedComponent("dashboard")}>Play</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
