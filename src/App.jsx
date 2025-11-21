import { useState } from "react";
import Header from "./components/Header";
import DifficultyContainer from "./components/DifficultyContainer";
import ScoreTracker from "./components/ScoreTracker";
import GameContainer from "./components/GameContainer";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="app">
        <Header>
          <ScoreTracker></ScoreTracker>
          <DifficultyContainer></DifficultyContainer>
        </Header>
        <GameContainer></GameContainer>
      </div>
    </>
  );
}

export default App;
