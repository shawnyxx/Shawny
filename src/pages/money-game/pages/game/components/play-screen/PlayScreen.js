// Money Game play screen
// By Crypt0zaurus_Rex - [UNFINISHED]

// Import the required libraries
import React from "react";
import "./PlayScreen.css";

// Create the PlayScreen component
function PlayScreen({ onPlayClick, onCreditsClick, setRenderedComponent }) {  
  return (
    <div className="PlayScreen">
      <div className="WhatsNewContainer">
        <button className="MenuButton">Nouveautés</button>
      </div>

      <h1 className="title">MONEY GAME</h1>

      <div className="ButtonContainer">
        <button className="MenuButton" setRenderedComponent={setRenderedComponent} onClick={onPlayClick}>
          <span>PLAY</span>
        </button>
        <button className="MenuButton" onClick={onCreditsClick}>
          <span>CREDITS</span>
        </button>
      </div>
    </div>
  );
};

export default PlayScreen;
