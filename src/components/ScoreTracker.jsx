function ScoreTracker(props) {
  return (
    <div className="score-container">
      <div className="current-score">
        <h3>Current Score: {props.score}</h3>
      </div>
      <div className="best-score">
        <h3>Best: {props.bestScore}</h3>
      </div>
    </div>
  );
}

export default ScoreTracker;
