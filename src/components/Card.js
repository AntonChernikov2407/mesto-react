

function Card({link, name, likes, handler}) {

  function handleClick() {
    handler({link, name});
  } 

  return(
    <article className="element">
      <button className="element__delete-button" type="button" aria-label="кнопка" />
      <img className="element__image" src={link} alt={name} onClick={handleClick} />
      <div className="element__caption">
        <h2 className="element__name">{name}</h2>
        <div className="element__like-container">
          <button className="element__like-button" type="button" aria-label="кнопка" />
          <p className="element__like-count">{likes.length}</p>
        </div>
      </div>
    </article>
  );

}

export default Card;