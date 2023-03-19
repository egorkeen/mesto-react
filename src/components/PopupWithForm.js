import React from 'react';

function PopupWithForm(props) {

  return (
    <div className={`popup ${props.name}-popup ${props.isOpen ? 'popup_active' : ''}`} noValidate="">
      <form className="form" name={`${props.name}-form`}>
        <button type="button" className="popup__close-button" aria-label="Закрыть окно" onClick={props.onClose}/>
        <h3 className="form__title">{props.title}</h3>
        {props.children}
      </form>
    </div>
  )
}

export default PopupWithForm;