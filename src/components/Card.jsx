import { Link } from "react-router-dom";

function Card({ emoji, title, description, to }) {
  return (
    <Link to={to} className="card">
      <span>{emoji}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

export default Card;
