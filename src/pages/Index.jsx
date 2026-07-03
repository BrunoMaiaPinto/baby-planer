import Card from "../components/Card";

const cards = [
  {
    emoji: "🍽️",
    title: "Alimentação",
    description: "Registe refeições e horários do bebê.",
    to: "/alimentacao",
  },
  {
    emoji: "🩺",
    title: "Consultas Médicas",
    description: "Agende e acompanhe as consultas.",
    to: "/consultasmedicas",
  },
  {
    emoji: " 🛒",
    title: "Lista de Compras",
    description: "Não se esqueça de nada para o bebê.",
    to: "/listadecompras",
  },
  {
    emoji: "💊",
    title: "Medicação",
    description: "Controle doses e horários dos remédios.",
    to: "/medicacao",
  },
  {
    emoji: " 📞",
    title: "Contactos",
    description: "Telefones úteis sempre à mão.",
    to: "/contactos",
  },
];

function Index() {
  return (
    <>
      <h2>Escolha uma secção para começar a organizar o dia a dia.</h2>
      <div className="index-page">
        {cards.map((card, index) => (
          <Card
            key={index}
            emoji={card.emoji}
            title={card.title}
            description={card.description}
            to={card.to}
          />
        ))}
      </div>
    </>
  );
}

export default Index;
