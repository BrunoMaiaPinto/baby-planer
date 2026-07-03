import PageCards from "../components/PageCards";
import { getData } from "../services/contactos";
import Button from "../components/Button";
import Input from "../components/Input";

const data = await getData();
// console.log(...data);

const inputs = [
  { name: "nome", type: "text", placeholder: "Nome" },
  { name: "telefone", type: "tel", placeholder: "Telefone" },
];

function Contactos() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PageCards
      description="Mantenha os contactos de emergência sempre à mão."
      content={
        <>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <a href={`tel:${item.telefone}`}>
                  {item.telefone} - {item.nome}
                </a>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit}>
            <h3>Adicionar contacto</h3>
            {inputs.map((input) => (
              <Input
                key={input.name}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
              />
            ))}

            <Button type="submit" nome="Adicionar" />
          </form>
        </>
      }
    />
  );
}

export default Contactos;
