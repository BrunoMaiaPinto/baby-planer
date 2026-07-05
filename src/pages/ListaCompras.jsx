import PageCards from "../components/PageCards";
import Button from "../components/Button";
import Input from "../components/Input";
import { useCollection } from "../hooks/useCollection";

const inputs = [
  { name: "item", type: "text", placeholder: "Item" },
  { name: "quantidade", type: "number", placeholder: "Quantidade" },
];

function ListaCompras() {
  const { rows, add, remove } = useCollection("compras");

  async function adicionar(e) {
    e.preventDefault();
    const form = e.target;
    await add({
      item: form.item.value,
      quantidade: form.quantidade.value,
    });
    form.reset();
  }

  return (
    <PageCards
      description="Adicione itens e marque-os à medida que os compra."
      content={
        <>
          <form onSubmit={adicionar}>
            <h3>Adicionar item</h3>
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
              <p>{item.item}</p>
              <p>{item.quantidade}</p>
              <button
                type="button"
                className="remove_button"
                aria-label="Remover item"
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

export default ListaCompras;
