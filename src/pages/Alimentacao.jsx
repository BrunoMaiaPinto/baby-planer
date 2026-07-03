import { useState } from "react";
import PageCards from "../components/PageCards";
import Button from "../components/Button";

function Alimentacao() {
  const [registos, setRegistos] = useState([]);

  function adicionar(e) {
    e.preventDefault();

    const form = e.target;

    const novoRegisto = {
      refeicao: form.refeicao.value,
      horario: form.horario.value,
      quantidade: form.quantidade.value,
    };

    setRegistos([...registos, novoRegisto]);

    form.reset();
  }

  return (
    <PageCards
      description="Acompanhe a alimentação do seu bebê — registe as refeições e os horários."
      content={
        <>
          <form onSubmit={adicionar}>
            <h3>Nova refeição</h3>

            <select name="refeicao" className="select">
              <option value="🤱 Mamada">🤱 Mamada</option>
              <option value="🍼 Fórmula">🍼 Fórmula</option>
            </select>

            <input className="input" name="horario" type="time" required />

            <input
              className="input"
              name="quantidade"
              type="number"
              placeholder="Quantidade (ml)"
              required
            />

            <Button type="submit" nome="Adicionar" />
          </form>

          <br />

          {registos.map((item, index) => (
            <div key={index} className="registos">
              <p>{item.refeicao}</p>
              <p>{item.horario}</p>
              <p>{item.quantidade} ml</p>
            </div>
          ))}
        </>
      }
    />
  );
}

export default Alimentacao;
