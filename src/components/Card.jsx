function Card(hero) {
  const heroImage = hero.img;
  console.log(heroImage);
  return (
    <div className="card" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="card-name">
        <h1>{hero.name}</h1>
      </div>
    </div>
  );
}

export default Card;
