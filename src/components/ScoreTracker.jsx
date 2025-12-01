function ScoreTracker(props) {
  return (
    <div className="score-container">
      <div className="current-score">
        <h2>Current Score: {props.score}</h2>
      </div>
      <div className="best-score">
        <h2>Best: {props.bestScore}</h2>
      </div>
    </div>
  );
}

export default ScoreTracker;
