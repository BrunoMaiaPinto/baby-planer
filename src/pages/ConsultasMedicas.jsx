import PageCards from "../components/PageCards";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const inputs = [
  { name: "nome", type: "text", placeholder: "Local" },
  { name: "data", type: "date", placeholder: "" },
  { name: "horario", type: "time", placeholder: "" },
  { name: "notas", type: "text", placeholder: "Notas" },
];

function ConsultasMedicas() {
  const [registos, setRegistos] = useState([]);

  function adicionar(e) {
    e.preventDefault();

    const form = e.target;

    const novoRegisto = {
      nome: form.nome.value,
      data: form.data.value,
      horario: form.horario.value,
      notas: form.notas.value,
    };

    setRegistos([...registos, novoRegisto]);

    form.reset();
  }
  return (
    <PageCards
      description="Agende as consultas e mantenha o calendário de saúde em dia."
      content={
        <>
          <form onSubmit={adicionar}>
            <h3>Nova consulta</h3>

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
              <p>{item.data}</p>
              <p>{item.horario}h</p>
              <p>
                <i>({item.notas})</i>
              </p>
            </div>
          ))}
        </>
      }
    />
  );
}

export default ConsultasMedicas;
