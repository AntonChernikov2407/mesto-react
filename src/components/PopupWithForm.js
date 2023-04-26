

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} popup_theme_light ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__close-overlay" onClick={props.onClose}></div>
      <div className="popup__container">
        <form className="form" name={`${props.name}-form`} noValidate>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <button className="form__submit-button" type="submit">{props.btnText}</button> 
        </form> 
        <button className="popup__close-button" type="button" aria-label="кнопка" onClick={props.onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;