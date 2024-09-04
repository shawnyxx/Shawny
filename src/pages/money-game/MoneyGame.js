// MoneyGame.js
import React, { useState } from "react";
import MainMenu from "./pages/game/components/main-menu/MainMenu";
import Game from "./pages/game/Game";
import IntroScreen from "./pages/intro/IntroScreen";
import PlayScreen from "./pages/play-screen/PlayScreen";

const MoneyGame = () => {
  const [currentScreen, setCurrentScreen] = useState("play-screen");
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
          <MainMenu />
        );
      case "intro":
        return <IntroScreen setCurrentScreen={setCurrentScreen} />;
      case "play-screen":
        return <PlayScreen setCurrentScreen={setCurrentScreen} />;
      case "game":
        return <Game />;
      default:
        return null;
    }
  };

  return <div className="money-game">{renderScreen()}</div>;
};

export default MoneyGame;
