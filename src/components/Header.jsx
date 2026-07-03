import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">
        <h1>🍼 Baby Planer</h1>
      </Link>
      <h2>Tudo sobre o bebê, organizado num só lugar</h2>
    </>
  );
}

export default Header;
