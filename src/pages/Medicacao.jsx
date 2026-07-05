import PageCards from "../components/PageCards";
import Button from "../components/Button";
import Input from "../components/Input";
import { useCollection } from "../hooks/useCollection";

const inputs = [
  { name: "nome", type: "text", placeholder: "Nome do medicamento" },
  { name: "dose", type: "number", placeholder: "Dose" },
  { name: "horario", type: "time", placeholder: "" },
];

function Medicacao() {
  const { rows, add, remove } = useCollection("medicacao");

  async function adicionar(e) {
    e.preventDefault();
    const form = e.target;
    await add({
      nome: form.nome.value,
      dose: form.dose.value,
      horario: form.horario.value,
    });
    form.reset();
  }

  return (
    <PageCards
      description="Registe os medicamentos, a dose e o horário de cada toma."
      content={
        <>
          <form onSubmit={adicionar}>
            <h3>Nova medicação</h3>

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

          {rows.map((item) => (
            <div key={item.id} className="registos">
              <p>{item.nome}</p>
              <p>{item.dose}</p>
              <p>{item.horario}h</p>
              <button
                type="button"
                className="remove_button"
                aria-label="Remover medicação"
                onClick={() => remove(item.id)}
              >
                ×
              </button>
            </div>
          ))}
        </>
      }
    />
  );
}

export default Medicacao;
