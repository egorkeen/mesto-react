import React from 'react';

function Card({_id, card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }  

  return(
    <article className="element" key={_id}>
    <button type="button" className="element__delete-button"></button>
    <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
    <div className="element__container">
      <h2 className="element__title">{card.name}</h2>
      <div className="element__like-container">
        <button type="button" className="element__like-button" aria-label="Кнопка лайка"></button>
        <span className="element__like-amount">{card.likes.length}</span>
      </div>
    </div>
  </article>
  )
}

export default Card;
