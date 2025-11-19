import { useState } from "react";
import Header from "./components/Header";
import DifficultyContainer from "./components/DifficultyContainer";
import ScoreTracker from "./components/ScoreTracker";
import GameContainer from "./components/GameContainer";
import Card from "./components/Card";
import shiv_img from "./assets/shiv.png";
import pocket_img from "./assets/pocket.png";
import holliday_img from "./assets/holliday.png";
import "./styles/App.css";

function App() {
  // example data for cards to show roughly what game will look like
  const heroes = {
    shiv: {
      name: "Shiv",
      img: shiv_img,
    },
    pocket: {
      name: "Pocket",
      img: pocket_img,
    },
    holliday: {
      name: "Holliday",
      img: holliday_img,
    },
  };

  return (
    <>
      <div className="app">
        <Header>
          <ScoreTracker></ScoreTracker>
          <DifficultyContainer></DifficultyContainer>
        </Header>
        <GameContainer>
          <Card {...heroes.shiv}></Card>
          <Card {...heroes.pocket}></Card>
          <Card {...heroes.holliday}></Card>
        </GameContainer>
      </div>
    </>
  );
}

export default App;
