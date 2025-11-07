function Header({ children }) {
  return (
    <>
      <div className="header-container">
        <h1>Deadlock</h1>
        <br />
        <h2>Memory Game</h2>
      </div>
      {children}
    </>
  );
}

export default Header;
