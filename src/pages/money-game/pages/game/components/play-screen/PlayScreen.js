import React from "react";
import "./PlayScreen.css";

function PlayScreen({ onPlayClick, onCreditsClick }) {
  return (
    <div className="PlayScreen">
      <div className="WhatsNewContainer">
        <button className="MenuButton">Nouveautés</button>
      </div>

      <h1 className="title">MONEY GAME</h1>

      <div className="ButtonContainer">
        <button className="MenuButton" onClick={onPlayClick}>
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
