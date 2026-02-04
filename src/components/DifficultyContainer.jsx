import { useState } from "react";

function DifficultyContainer(props) {
  return (
    <div className="difficulty-container">
      <div className="difficulty-buttons">
        <button
          // if current difficulty state is equal to the btn diff, add the activ class
          className={`diff-btn easy-btn ${
            props.difficulty.level === "Easy" ? "active" : ""
          }`}
          onClick={() =>
            props.setCurrentDifficulty({ level: "Easy", maxScore: 5 })
          }
        >
          Easy
        </button>
        <button
          className={`diff-btn medium-btn ${
            props.difficulty.level === "Medium" ? "active" : ""
          }`}
          onClick={() =>
            props.setCurrentDifficulty({ level: "Medium", maxScore: 10 })
          }
        >
          Medium
        </button>
        <button
          className={`diff-btn hard-btn ${
            props.difficulty.level === "Hard" ? "active" : ""
          }`}
          onClick={() =>
            props.setCurrentDifficulty({ level: "Hard", maxScore: 15 })
          }
        >
          Hard
        </button>
      </div>
    </div>
  );
}

export default DifficultyContainer;
