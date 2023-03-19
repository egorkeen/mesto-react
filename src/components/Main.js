import React, { useEffect, useState } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';


function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserData()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api.getInitialCards()
    .then((res) => {
      setCards(res.map((dataCard) => {
        return {
          _id: dataCard._id,
          name: dataCard.name,
          link: dataCard.link,
          owner: dataCard.owner,
          likes: dataCard.likes
        }
      }))
    })
    .catch((err) => console.log(err))
  }, [])

    return (
      <main className="content">
      <section className="profile">
        <div className="profile__edit-avatar" onClick={props.onEditAvatar} />
        <img src={userAvatar} className="profile__avatar" alt="Аватар" />
        <div className="profile__data">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about">{userDescription}</p>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="Редактировать профиль"
            onClick={props.onEditProfile}
          />
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавить картинку"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="elements">
        {cards.map((card) => <Card 
          key={card._id} 
          card={card} 
          onCardClick={props.onCardClick} />)}
      </section>
    </main>
  );
};

export default Main;