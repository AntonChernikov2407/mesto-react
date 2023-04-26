import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Footer from './Footer.js';
import { useState } from 'react';

function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }
  
  return (
    <div className="App">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        btnText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <fieldset className="form__input-container"> 
            <input
              className="form__input"
              id="name-input" type="text"
              name="name"
              placeholder="Введите ваше имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="form__input-error name-input-error"></span>
            <input
              className="form__input"
              id="about-input"
              type="text"
              name="about"
              placeholder="Расскажите о себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="form__input-error about-input-error"></span>
          </fieldset>
        }
      />
      <PopupWithForm
        name="add-place"
        title="Новое место"
        btnText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <fieldset className="form__input-container"> 
            <input
              className="form__input"
              id="place-input"
              type="text"
              name="place"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__input-error place-input-error"></span>
            <input
              className="form__input"
              id="link-input"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error link-input-error"></span>
          </fieldset>
        }
      />
      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        btnText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <fieldset className="form__input-container"> 
            <input
              className="form__input"
              id="avatar-input"
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error avatar-input-error"></span>
          </fieldset>
        }
      />
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        btnText="Да"
        children=""
      />
      <Footer />
    </div>
  );
}

export default App;
