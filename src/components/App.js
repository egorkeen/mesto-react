import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { useState } from 'react';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  return (
<div className="page">
  <Header />
  <Main 
  onEditProfile={handleEditProfileClick} 
  onAddPlace={handleAddPlaceClick} 
  onEditAvatar={handleEditAvatarClick} />

  <PopupWithForm 
  name="profile" 
  title="Редактировать профиль" 
  isOpen={isEditProfilePopupOpen} 
  onClose={closeAllPopups}>
    <input 
      type="text" 
      id="place-input" 
      name="name" 
      className="form__input form__input_place_name" 
      placeholder="Название" 
      minLength={2} 
      maxLength={30} 
      required=""/>
    <span className="form__input-error place-input-error"/>
    <input 
      type="url" 
      id="link-input" 
      name="link" 
      className="form__input form__input_place_link" 
      placeholder="Ссылка на картинку" 
      required=""/>
    <span className="form__input-error link-input-error"/>
    <button 
      type="submit" 
      id="submit-place" 
      className="form__submit-button" 
      aria-label="Сохранить изменения">Создать</button>
  </PopupWithForm>

  <PopupWithForm 
  name="card" 
  title="Новое место" 
  isOpen={isAddPlacePopupOpen} 
  onClose={closeAllPopups}>
    <input 
      type="text" 
      id="name-input" 
      name="name" 
      className="form__input form__input_data_name" 
      placeholder="Имя" 
      minLength={2} 
      maxLength={40} 
      required=""/>
    <span className="form__input-error name-input-error" />
    <input 
      type="text" 
      id="info-input" 
      name="about" 
      className="form__input form__input_data_info" 
      placeholder="Описание" 
      minLength={2} 
      maxLength={200} 
      required=""/>
    <span className="form__input-error info-input-error" />
    <button 
      type="submit" 
      id="submit-changes" 
      className="form__submit-button" 
      aria-label="Сохранить изменения">Сохранить</button>
  </PopupWithForm>

  <PopupWithForm 
  name="avatar" 
  title="Обновить аватар" 
  isOpen={isEditAvatarPopupOpen} 
  onClose={closeAllPopups}>
    <input 
      type="url" 
      id="avatar-input" 
      name="avatar" 
      className="form__input form__input_avatar_link" 
      placeholder="Ссылка на аватар" 
      required=""/>
    <span className="form__input-error avatar-input-error" />
    <button 
      type="submit" 
      id="submit-avatar" 
      className="form__submit-button" 
      aria-label="Сохранить изменения">Сохранить</button>
  </PopupWithForm>

  <PopupWithForm 
  name="confirmation" 
  title="Вы уверены?">
    <button 
      type="submit" 
      id="submit-delete" 
      className="form__submit-button" 
      aria-label="Подтвердить удаление картинки">Да</button>
  </PopupWithForm>

  <ImagePopup/>
  <Footer />
  <template className="template" />
</div>
  );
}

export default App;
