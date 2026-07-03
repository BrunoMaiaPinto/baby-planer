import Button from "./Button";

function Form({ titulo, name, type, placeholder }) {
  return (
    <form>
      <h3>{titulo}</h3>
      <input
        className="input"
        name={name}
        type={type}
        placeholder={placeholder}
        required
      />

      <input
        className="input"
        name="telefone"
        type="tel"
        placeholder="Telefone"
        required
      />

      <Button type="submit" nome="Adicionar" />
    </form>
  );
}
