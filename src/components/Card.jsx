import { useState } from "react";

function Card(props) {
  const [isClicked, setIsClicked] = useState(false);
  const heroUrl = props.url;
  const handleClick = () => {
    if (isClicked) {
      console.log(`${props.name} already clicked, game over`);
      props.setGameOver();
    } else {
      setIsClicked(true);
      console.log(`${props.name} clicked, move to next round`);
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
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Card;
