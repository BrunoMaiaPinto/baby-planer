import { Link } from "react-router-dom";
import Button from "./Button.jsx";

const buttons = [
  { nome: "Alimentação", link: "/alimentacao" },
  { nome: "Consultas Médicas", link: "/consultasmedicas" },
  { nome: "Lista de Compras", link: "/listadecompras" },
  { nome: "Medicação", link: "/medicacao" },
  { nome: "Contactos", link: "/contactos" },
];

function Navbar() {
  return (
    <nav>
      {buttons.map((button, index) => (
        <Link key={index} to={button.link}>
          <Button key={index} nome={button.nome} />
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
