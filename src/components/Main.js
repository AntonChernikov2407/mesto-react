
import api from '../utils/api.js';
import { useState, useEffect } from 'react';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((info) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
      })
      .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        const result = data.map((card) => ({
          id: card._id,
          name: card.name,
          link: card.link,
          likes: card.likes
        }));
        setCards(result);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container" onClick={props.onEditAvatar}>
            <img className="profile__avatar" alt="Аватар" src={userAvatar} />
          </div> 
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__about-yourself">{userDescription}</p>
            <button className="profile__edit-button" type="button" aria-label="кнопка" onClick={props.onEditProfile} />
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="кнопка" onClick={props.onAddPlace} />
      </section>

      <section className="elements" aria-label="карточки">
        {cards.map((card) => <Card key={card.id} {...card} handler={props.onCardClick} />)}
      </section>

    </main>
  );
}

export default Main;