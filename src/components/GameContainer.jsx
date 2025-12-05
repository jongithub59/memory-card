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
import bebop from "../assets/bebop.png";
import { useState } from "react";
import { useEffect } from "react";

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
      name: "Bebop",
      img: bebop,
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

  const [noMouse, setNoMouse] = useState(false);
  const [flipAll, setFlipAll] = useState(false);
  const [shuffledHeroes, setShuffledHeroes] = useState([]);
  // need to move clicked state up because the new shuffling causes the local clicked state to be out of sync
  const [clickedCards, setClickedCards] = useState(new Set());

  // card click logic moved here to ensure clicked state is always correct
  function handleCardClick(heroName) {
    if (clickedCards.has(heroName)) {
      // check if card was clicked
      props.setGameOver();
    } else {
      setClickedCards((prev) => new Set(prev).add(heroName)); // add card to clicked cards set
      shuffleSequence();
    }
  }

  // move hero amount selection and initial shuffle to an effect that updates on difficulty change
  useEffect(() => {
    const limited = heroes.slice(0, props.difficulty.maxScore);
    setShuffledHeroes([...limited].sort(() => Math.random() - 0.5));
    setFlipAll(false);
  }, [props.difficulty]);

  // flip cards then wait 600ms for flip to finish, then shuffle cards, increment score then flip back over after 1.2s
  function shuffleSequence() {
    setFlipAll(true);
    setNoMouse(true); // disable clicking during flipping

    setTimeout(() => {
      shuffleCards();
      props.incrementScore();
    }, 600);

    setTimeout(() => {
      setFlipAll(false);
    }, 1200);

    // re-enable clicking slightly after flipping back is done
    setTimeout(() => {
      setNoMouse(false);
    }, 1600);
  }

  // move shuffled heroes to state variable, so react re-renders when shuffledHeroes changes, not when score changes
  function shuffleCards() {
    setShuffledHeroes((prev) => [...prev].sort(() => Math.random() - 0.5));
  }

  // shuffle heroes array then create an array of Card components from hero array to then render with GameContainer
  const heroCards = shuffledHeroes.map((hero) => {
    return (
      <Card
        key={hero.name}
        url={hero.img}
        name={hero.name}
        flipAll={flipAll}
        handleClick={() => handleCardClick(hero.name)}
        isClicked={clickedCards.has(hero.name)}
        noMouse={noMouse}
      />
    );
  });

  return (
    <>
      <div className="game-container">{heroCards}</div>
      <div className="progress">
        {props.score}/{props.difficulty.maxScore}
      </div>
    </>
  );
}

export default GameContainer;
