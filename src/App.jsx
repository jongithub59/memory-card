import { useState, useEffect } from "react";
import Header from "./components/Header";
import DifficultyContainer from "./components/DifficultyContainer";
import ScoreTracker from "./components/ScoreTracker";
import GameContainer from "./components/GameContainer";
import "./styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  function incrementScore() {
    setScore(score + 1);
  }

  // set bestscore equal to score when bestscore is 0 or less than score when incrementScore() runs
  function incrementBestScore() {
    if (bestScore === 0) {
      setBestScore(score);
    }
    if (bestScore < score) {
      setBestScore(score);
    }
  }

  // calculate best score when score state changes
  useEffect(() => {
    incrementBestScore();
  }, [score]);

  function gameOver() {
    setIsGameOver(true);
    console.log(`Game Over: ${isGameOver}`);
  }

  // reset best score then restart as normal
  function gameWon() {
    setBestScore(0);
    restartGame();
  }

  function restartGame() {
    setScore(0);
    setIsGameOver(false);
  }

  return (
    <>
      <div className="app">
        <Header>
          <ScoreTracker score={score} bestScore={bestScore}></ScoreTracker>
          <DifficultyContainer></DifficultyContainer>
        </Header>
        {/* display game if player has not lost or reached the maximum score */}
        {!isGameOver && score < 5 && (
          <GameContainer
            setGameOver={gameOver}
            incrementScore={incrementScore}
          ></GameContainer>
        )}

        {/* display game over screen if player lost */}
        {isGameOver === true && (
          <div className="game-over">
            <p>Game Over. Try again?</p>{" "}
            <button onClick={restartGame}>Restart</button>
          </div>
        )}

        {/* display victory screen if player wins */}
        {score === 5 && (
          <div className="game-win">
            <p>You Win. Play again?</p>{" "}
            <button onClick={gameWon}>Restart</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
