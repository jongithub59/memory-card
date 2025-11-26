import Card from "./Card";
import shiv from "../assets/shiv.png";
import pocket from "../assets/pocket.png";
import holliday from "../assets/holliday.png";
import warden from "../assets/warden.png";
import abrams from "../assets/abrams.png";
import vindicta from "../assets/vindicta.png";
import lash from "../assets/lash.png";
import mirage from "../assets/mirage.png";
import infernus from "../assets/infernus.png";
import billy from "../assets/billy.png";
import doorman from "../assets/the_doorman.png";
import grey_talon from "../assets/grey_talon.png";

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
    {
      name: "Infernus",
      img: infernus,
    },
    {
      name: "Mirage",
      img: mirage,
    },
    {
      name: "Lash",
      img: lash,
    },
    {
      name: "Grey Talon",
      img: grey_talon,
    },
    {
      name: "Doorman",
      img: doorman,
    },
    {
      name: "Billy",
      img: billy,
    },
    {
      name: "Vindicta",
      img: vindicta,
    },
  ];

  // only allow the amount of cards for the difficulty type to be rendered ex. easy = 5 cards
  heroes = heroes.filter((hero, index) => index < props.difficulty.maxScore);

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
