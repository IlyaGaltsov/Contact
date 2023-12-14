import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/action';

const AddContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveContact = () => {
    dispatch(addContact(formData));
    setFormData({ name: '', username: '', phone: '' });
  };

  return (
    <div>
      <h2>Додавання контакту</h2>
      <form>
        <label>Ім'я:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <label>Прізвище:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br />
        <label>Телефон:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <br />
        <button type="button" onClick={handleSaveContact}>
          Зберегти
        </button>
      </form>
    </div>
  );
};

export default AddContact;