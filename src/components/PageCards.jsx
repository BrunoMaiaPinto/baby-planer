import Button from "./Button";

function PageCards({ title, description, content }) {
  return (
    <>
      <h3>{description}</h3>
      <div className="pagina">
        {content}
        {/* <Button nome="Adicionar" /> */}
      </div>
    </>
  );
}

export default PageCards;
