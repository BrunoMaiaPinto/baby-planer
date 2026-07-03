import PageCards from "../components/PageCards";
import Button from "../components/Button";
import { useState } from "react";
import Input from "../components/Input";

const inputs = [
  { name: "item", type: "text", placeholder: "Item" },
  { name: "quantidade", type: "number", placeholder: "Quantidade" },
];

function ListaCompras() {
  const [registos, setRegistos] = useState([]);

  function adicionar(e) {
    e.preventDefault();

    const form = e.target;

    const novoRegisto = {
      item: form.item.value,
      quantidade: form.quantidade.value,
    };

    setRegistos([...registos, novoRegisto]);

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

          {registos.map((item, index) => (
            <div key={index} className="registos">
              <p>{item.item}</p>
              <p>{item.quantidade}</p>
            </div>
          ))}
        </>
      }
    />
  );
}

export default ListaCompras;
