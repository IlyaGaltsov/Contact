import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../store/action';

const Contact = ({ onPageChange }) => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h2>Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => handleDelete(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => onPageChange('add-contact')}>Додати контакт</button>
    </div>
  );
};

export default Contact;