import { NavLink } from "react-router-dom";

const buttons = [
  { nome: "Alimentação", link: "/alimentacao" },
  { nome: "Consultas Médicas", link: "/consultasmedicas" },
  { nome: "Lista de Compras", link: "/listadecompras" },
  { nome: "Medicação", link: "/medicacao" },
  { nome: "Contactos", link: "/contactos" },
];

function Navbar() {
  return (
    <nav aria-label="Navegação principal">
      {buttons.map((button) => (
        <NavLink
          key={button.link}
          to={button.link}
          className={({ isActive }) =>
            isActive ? "nav_button is-active" : "nav_button"
          }
        >
          {button.nome}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
