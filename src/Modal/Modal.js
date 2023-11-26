import React from 'react';

const Modal = ({ onDelete, onClose }) => {
  return (
    <div>
      <div className='modal'>
        <p>Вы действительно хотите удалить контакт?</p>
        <button className='btn' onClick={onDelete}>Да</button>
        <button className='btn' onClick={onClose}>Нет</button>
      </div>
    </div>
  );
};

export default Modal;