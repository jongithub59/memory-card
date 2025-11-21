import { useState } from "react";
import Header from "./components/Header";
import DifficultyContainer from "./components/DifficultyContainer";
import ScoreTracker from "./components/ScoreTracker";
import GameContainer from "./components/GameContainer";
import Card from "./components/Card";
import shiv from "./assets/shiv.png";
import pocket from "./assets/pocket.png";
import holliday from "./assets/holliday.png";
import warden from "./assets/warden.png";
import "./styles/App.css";

function App() {
  // array of card objects containing their name and image url, can change later to fetch from api later
  const heroes = [
    {
      name: "Shiv",
      img: shiv,
    },
    {
      name: "Pocket",
      img: pocket,
    },
    {
      name: "Holliday",
      img: holliday,
    },
    {
      name: "Warden",
      img: warden,
    },
  ];

  // create an array of Card components from hero array to then render with GameContainer
  const heroCards = heroes.map((hero) => {
    return <Card key={hero.name} url={hero.img} name={hero.name} />; // props for each Card
  });

  return (
    <>
      <div className="app">
        <Header>
          <ScoreTracker></ScoreTracker>
          <DifficultyContainer></DifficultyContainer>
        </Header>
        <GameContainer>{heroCards}</GameContainer>
      </div>
    </>
  );
}

export default App;
