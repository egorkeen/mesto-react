import React from 'react';

function Card(props) {
  return(
    <article className="element" key={props.key}>
    <button type="button" className="element__delete-button"></button>
    <img className="element__image" src={props.link} alt={props.name}/>
    <div className="element__container">
      <h2 className="element__title">{props.name}</h2>
      <div className="element__like-container">
        <button type="button" className="element__like-button" aria-label="Кнопка лайка"></button>
        <span className="element__like-amount">{props.likes.length}</span>
      </div>
    </div>
  </article>
  )
}

export default Card;
