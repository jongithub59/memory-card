import logo from "../assets/logo.png";

function Header({ children }) {
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="deadlock logo" />
        </div>
        <h1>Deadlock</h1>
      </div>
      {children}
    </>
  );
}

export default Header;
