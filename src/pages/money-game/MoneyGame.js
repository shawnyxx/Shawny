// MoneyGame.js
import React, { useState } from "react";
import MainMenu from "./pages/menu/MainMenu";
import Game from "./pages/game/Game";
import IntroScreen from "./pages/intro/IntroScreen";
import PlayScreen from "./pages/play-screen/PlayScreen";

const MoneyGame = () => {
  const [currentScreen, setCurrentScreen] = useState("menu");
  const [showCredits, setShowCredits] = useState(false);

  const handlePlayClick = () => {
    setCurrentScreen("intro");
  };

  const handleCreditsClick = () => {
    setShowCredits(true);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "menu":
        return (
          <MainMenu
            onPlayClick={handlePlayClick}
            onCreditsClick={handleCreditsClick}
          />
        );
      case "intro":
        return <IntroScreen onComplete={() => setCurrentScreen("play")} />;
      case "play":
        return <PlayScreen />;
      default:
        return <MainMenu />;
    }
  };

  return <div className="money-game">{renderScreen()}</div>;
};

export default MoneyGame;
