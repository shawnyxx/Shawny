import React, { useState } from "react";
import MainMenu from "./components/main-menu/MainMenu";
import Dashboard from "./components/dashboard/Dashboard";

function MoneyGame() {
    const [renderedComponent, setRenderedComponent] = useState("play-screen");

    const renderScreen = () => {
        switch (renderedComponent) {
            case "play-screen":
                return <MainMenu setRenderedComponent={setRenderedComponent} />;
            case "dashboard":
                return <Dashboard />;
            default:
                return <MainMenu setRenderedComponent={setRenderedComponent} />;
        }
    };

    return <div>{renderScreen()}</div>;
}

export default MoneyGame;