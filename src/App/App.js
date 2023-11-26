import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Contacts from '../Contact/Contact';
import AddContact from '../AddContact/AddContact';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <Router>
      <div>
        <div>
          <Link to="/">Список контактов</Link>
          <Link to="/newcontact">Добавить контакт</Link>
        </div>
        <Routes>
          <Route path="/" element={<Contacts contacts={contacts} deleteContact={deleteContact} />} />
          <Route path="/newcontact" element={<AddContact addContact={addContact} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;