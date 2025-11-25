import Card from "./Card";
import shiv from "../assets/shiv.png";
import pocket from "../assets/pocket.png";
import holliday from "../assets/holliday.png";
import warden from "../assets/warden.png";
import abrams from "../assets/abrams.png";

function GameContainer(props) {
  // array of card objects containing their name and image url, can change later to fetch from api later
  let heroes = [
    {
      name: "Shiv",
      img: shiv,
    },
    {
      name: "Pocket",
      img: pocket,
    },
    {
      name: "Abrams",
      img: abrams,
    },
    {
      name: "Holliday",
      img: holliday,
    },
    {
      name: "Warden",
      img: warden,
    },
  ];

  // shuffle order of heroes array on re-render, which will affect cards
  heroes.sort(() => Math.random() - 0.5);

  // create an array of Card components from hero array to then render with GameContainer
  const heroCards = heroes.map((hero) => {
    return (
      <Card
        // props for each Card
        key={hero.name}
        url={hero.img}
        setGameOver={props.setGameOver}
        incrementScore={props.incrementScore}
        name={hero.name}
      />
    );
  });

  return <div className="game-container">{heroCards}</div>;
}

export default GameContainer;
