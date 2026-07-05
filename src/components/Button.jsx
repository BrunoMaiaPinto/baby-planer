function Button({ nome, type = "button", onClick, disabled }) {
  return (
    <button
      className="nav_button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {nome}
    </button>
  );
}

export default Button;
