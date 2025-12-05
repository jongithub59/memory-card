import { useEffect, useState } from "react";

function Card(props) {
  const [flip, setFlip] = useState(false);
  const heroUrl = props.url;

  // flip card when flipAll is true (this will flip every card)
  useEffect(() => {
    setFlip(props.flipAll);
  }, [props.flipAll]);

  return (
    <div className={`card ${flip ? "flip" : ""}`} onClick={props.handleClick}>
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
