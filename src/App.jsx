import { useState, useEffect, use } from "react";
import Header from "./components/Header";
import DifficultyContainer from "./components/DifficultyContainer";
import ScoreTracker from "./components/ScoreTracker";
import GameContainer from "./components/GameContainer";
import video from "./assets/menu_streets_loop2-vmake.mp4";
import Loading from "./components/Loading";
import "./styles/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [difficulty, setDifficulty] = useState({ level: "Easy", maxScore: 5 });
  const [isGameOver, setIsGameOver] = useState(false);

  // show load screen for 1 second then set loading to false to display main page
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);

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

  useEffect(() => {
    resetGame();
  }, [difficulty]);

  function setCurrentDifficulty(diff) {
    setDifficulty(diff);
  }

  function gameOver() {
    setIsGameOver(true);
  }

  // fully reset game then restart as normal (game over)
  function resetGame() {
    setScore(0);
    setBestScore(0);
    restartGame();
  }

  // start the from the beginning but keep best score (when game is won)
  function restartGame() {
    setScore(0);
    setIsGameOver(false);
  }

  return (
    <>
      {!isLoading ? (
        <div className="app">
          <Loading />
        </div>
      ) : (
        <>
          <div className="app">
            <Header>
              <ScoreTracker score={score} bestScore={bestScore}></ScoreTracker>
              <DifficultyContainer
                setCurrentDifficulty={setCurrentDifficulty}
                difficulty={difficulty}
              ></DifficultyContainer>
            </Header>
            {/* display game if player has not lost or reached the maximum score */}
            {!isGameOver && score < difficulty.maxScore && (
              <GameContainer
                setGameOver={gameOver}
                incrementScore={incrementScore}
                difficulty={difficulty}
                score={score}
                resetGame={resetGame}
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
            {score === difficulty.maxScore && (
              <div className="game-win">
                <p>You Win. Play again?</p>{" "}
                <button onClick={resetGame}>Restart</button>
              </div>
            )}
          </div>
        </>
      )}
      <video autoPlay muted loop id="video-background">
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
