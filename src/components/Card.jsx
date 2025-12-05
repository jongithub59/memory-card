import { useEffect, useState } from "react";

function Card(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [flip, setFlip] = useState(false);
  const heroUrl = props.url;
  const handleClick = () => {
    if (isClicked) {
      props.setGameOver();
    } else {
      setIsClicked(true);
      props.onSuccess();
    }
  };

  // flip card when flipAll is true (this will flip every card)
  useEffect(() => {
    setFlip(props.flipAll);
  }, [props.flipAll]);

  // reset clicked cards when difficulty is changed
  useEffect(() => {
    setIsClicked(false);
  }, [props.difficulty]);

  return (
    <div className={`card ${flip ? "flip" : ""}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="front">
          <div
            className="card-content"
            style={{ backgroundImage: `url(${heroUrl})` }}
          >
            <p>{props.name}</p>
          </div>
        </div>

        <div className="back">
          <div className="card-content"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
