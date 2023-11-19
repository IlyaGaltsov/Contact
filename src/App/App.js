import React, { useState } from 'react';
import Contacts from '../Contact/Contact';
import AddContact from '../AddContact/AddContact';

const App = () => {
  const [page, setPage] = useState('contacts');
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    setPage('contact');
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <div>
        <button onClick={() => setPage('contact')}>Список контактів</button>
        <button onClick={() => setPage('addContact')}>Додати контакт</button>
      </div>
      {page === 'contact' && (
        <Contacts contacts={contacts} deleteContact={deleteContact} />
      )}
      {page === 'addContact' && <AddContact addContact={addContact} />}
    </div>
  );
};

export default App;