function PageCards({ description, content }) {
  return (
    <>
      {description ? <h3 className="page-description">{description}</h3> : null}
      <div className="pagina">{content}</div>
    </>
  );
}

export default PageCards;
