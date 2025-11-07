import { useState } from "react";
import Header from "./components/Header";
import DifficultyContainer from "./components/DifficultyContainer";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="app">
        <Header>
          <DifficultyContainer></DifficultyContainer>
        </Header>
      </div>
    </>
  );
}

export default App;
