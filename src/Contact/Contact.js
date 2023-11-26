import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import '../Modal/Modal.css';

const Contact = ({ contacts, deleteContact }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDeleteModal = (index) => {
    setSelectedContact(index);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedContact(null);
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    if (selectedContact !== null) {
      deleteContact(selectedContact);
      closeDeleteModal();
    }
  };

  return (
    <div>
      <h2>Список контактів</h2>
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
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => openDeleteModal(index)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <Modal onDelete={handleDelete} onClose={closeDeleteModal}>
          <p>Вы действительно хотите удалить контакт?</p>
        </Modal>
      )}
    </div>
  );
};

export default Contact;