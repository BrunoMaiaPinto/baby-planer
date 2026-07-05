import PageCards from "../components/PageCards";
import Button from "../components/Button";
import { useCollection } from "../hooks/useCollection";

function Alimentacao() {
  const { rows, add, remove } = useCollection("alimentacao");

  async function adicionar(e) {
    e.preventDefault();
    const form = e.target;
    await add({
      refeicao: form.refeicao.value,
      horario: form.horario.value,
      quantidade: form.quantidade.value,
    });
    form.reset();
  }

  return (
    <PageCards
      description="Acompanhe a alimentação do seu bebê — registe as refeições e os horários."
      content={
        <>
          <form onSubmit={adicionar}>
            <h3>Nova refeição</h3>

            <label className="sr-only" htmlFor="refeicao">
              Tipo de refeição
            </label>
            <select id="refeicao" name="refeicao" className="select">
              <option>🤱 Mamada</option>
              <option>🍼 Fórmula</option>
            </select>

            <label className="sr-only" htmlFor="horario">
              Horário
            </label>
            <input
              id="horario"
              className="input"
              name="horario"
              type="time"
              required
            />

            <label className="sr-only" htmlFor="quantidade">
              Quantidade em ml
            </label>
            <input
              id="quantidade"
              className="input"
              name="quantidade"
              type="number"
              placeholder="Quantidade (ml)"
              required
            />

            <Button type="submit" nome="Adicionar" />
          </form>

          {rows.map((item) => (
            <div key={item.id} className="registos">
              <p>{item.refeicao}</p>
              <p>{item.horario}</p>
              <p>{item.quantidade} ml</p>
              <button
                type="button"
                className="remove_button"
                aria-label="Remover registo"
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

export default Alimentacao;
