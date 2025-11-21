function ScoreTracker(props) {
  console.log(props);
  return (
    <div className="score-container">
      <div className="current-score">Current Score: {props.score}</div>
      <div className="best-score">Best: {props.bestScore}</div>
    </div>
  );
}

export default ScoreTracker;
