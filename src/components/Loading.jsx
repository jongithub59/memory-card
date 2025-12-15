import logo from "../assets/logo.png";

function Loading() {
  return (
    <div className="loading">
      <img src={logo} alt="logo" />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
