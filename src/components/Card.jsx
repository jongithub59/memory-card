import { useEffect, useState } from "react";

function Card(props) {
  const [flip, setFlip] = useState(false);
  const heroUrl = props.url;

  // set flip to true when flipAll is true (this will flip every card)
  useEffect(() => {
    setFlip(props.flipAll);
  }, [props.flipAll]);

  return (
    <div
      // add flip class when flip is true which will flip cards
      className={`card ${flip ? "flip " : ""} ${
        props.noMouse ? "no-mouse no-hover" : ""
      }`}
      onClick={props.handleClick}
    >
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
