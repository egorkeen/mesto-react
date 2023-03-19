import React from 'react';

function ImagePopup(props) {
  return(
    <div className="popup image-popup">
      <div className="popup__image-container">
        <button type="button" className="popup__close-button" aria-label="Закрыть окно"/>
        <img className="popup__image" src=" " alt=""/>
        <span className="popup__image-span">Надпись</span>
      </div>
    </div>
  )
}

export default ImagePopup;