import { useEffect } from "react";
import PageCards from "../components/PageCards";
import Button from "../components/Button";
import Input from "../components/Input";
import { useCollection } from "../hooks/useCollection";
import { getData } from "../services/contactos";
import { seedOnce } from "../lib/store";

const inputs = [
  { name: "nome", type: "text", placeholder: "Nome" },
  { name: "telefone", type: "tel", placeholder: "Telefone" },
];

function Contactos() {
  const { rows, loading, add, remove, refresh } = useCollection("contactos");

  // On first visit, import the default contacts from the remote list.
  useEffect(() => {
    let active = true;
    async function seed() {
      try {
        const remote = await getData();
        const clean = remote.map((c) => ({
          nome: c.nome,
          telefone: c.telefone,
        }));
        await seedOnce("contactos", clean);
        if (active) refresh();
      } catch {
        // If the remote list is unavailable we simply start empty.
      }
    }
    seed();
    return () => {
      active = false;
    };
  }, [refresh]);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    await add({
      nome: form.nome.value,
      telefone: form.telefone.value,
    });
    form.reset();
  }

  return (
    <PageCards
      description="Mantenha os contactos de emergência sempre à mão."
      content={
        <>
          {loading && rows.length === 0 ? (
            <p>A carregar contactos…</p>
          ) : rows.length === 0 ? (
            <p>Ainda não há contactos. Adicione o primeiro abaixo.</p>
          ) : (
            <ul>
              {rows.map((item) => (
                <li key={item.id}>
                  <a href={`tel:${item.telefone}`}>
                    {item.telefone} — {item.nome}
                  </a>
                  <button
                    type="button"
                    className="remove_button"
                    aria-label={`Remover ${item.nome}`}
                    onClick={() => remove(item.id)}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}

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
