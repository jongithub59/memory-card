function DifficultyContainer(props) {
  return (
    <div className="difficulty-container">
      <h2 className="diff-display">
        Current Difficulty: {props.difficulty.level}
      </h2>
      <div className="difficulty-buttons">
        <button
          className="diff-btn"
          onClick={() =>
            props.setCurrentDifficulty({ level: "Easy", maxScore: 5 })
          }
        >
          Easy
        </button>
        <button
          className="diff-btn"
          onClick={() =>
            props.setCurrentDifficulty({ level: "Medium", maxScore: 8 })
          }
        >
          Medium
        </button>
        <button
          className="diff-btn"
          onClick={() =>
            props.setCurrentDifficulty({ level: "Hard", maxScore: 12 })
          }
        >
          Hard
        </button>
      </div>
    </div>
  );
}

export default DifficultyContainer;
