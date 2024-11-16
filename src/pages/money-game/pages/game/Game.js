import React, { useState } from "react";
import PlayScreen from './components/play-screen/PlayScreen';
import Dashboard from "./components/dashboard/Dashboard";

function MoneyGame() {
    const [renderedComponent, setRenderedComponent] = useState("play-screen");

    const renderScreen = () => {
        switch (renderedComponent) {
            case "play-screen":
                return <PlayScreen renderedComponent={renderedComponent} onPlayClick={() => setRenderedComponent("dashboard")} />;
            case "dashboard":
                return <Dashboard />;
            default:
                return <PlayScreen renderedComponent={renderedComponent} onPlayClick={() => setRenderedComponent("dashboard")} />;
        }
    };

    return <div>{renderScreen()}</div>;
}

export default MoneyGame;