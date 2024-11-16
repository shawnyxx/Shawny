import React, { useState } from "react";
import Game from "./pages/game/Game";
import IntroScreen from "./pages/intro/IntroScreen";
import PlayScreen from "./pages/play-screen/PlayScreen";

const MoneyGame = () => {
  const [currentScreen, setCurrentScreen] = useState("play-screen");

  const renderScreen = () => {
    switch (currentScreen) {
      case "play-screen":
        return <PlayScreen currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
      case "intro":
        return <IntroScreen currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
      case "game":
        return <Game />;
      default:
        return <PlayScreen currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    }
  };

  return <div className="money-game">{renderScreen()}</div>;
};

export default MoneyGame;