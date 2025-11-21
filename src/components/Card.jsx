import { useState } from "react";

function Card(props) {
  const [isClicked, setIsClicked] = useState(false);
  const heroUrl = props.url;

  const handleClick = () => {
    if (isClicked) {
      console.log("already clicked, game over");
      props.setGameOver();
    } else {
      setIsClicked(true);
      console.log("clicked, move to next round");
      props.incrementScore();
    }
  };

  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ backgroundImage: `url(${heroUrl})` }}
    >
      <div className="card-name">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default Card;
