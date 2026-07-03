import PageCards from "../components/PageCards";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const inputs = [
  { name: "nome", type: "text", placeholder: "Nome do medicamento" },
  { name: "dose", type: "number", placeholder: "Dose" },
  { name: "horario", type: "time", placeholder: "" },
];

function Medicacao() {
  const [registos, setRegistos] = useState([]);

  function adicionar(e) {
    e.preventDefault();

    const form = e.target;

    const novoRegisto = {
      nome: form.nome.value,
      dose: form.dose.value,
      horario: form.horario.value,
    };

    setRegistos([...registos, novoRegisto]);

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

          {registos.map((item, index) => (
            <div key={index} className="registos">
              <p>{item.nome}</p>
              <p>{item.dose}</p>
              <p>{item.horario}h</p>
            </div>
          ))}
        </>
      }
    />
  );
}

export default Medicacao;
