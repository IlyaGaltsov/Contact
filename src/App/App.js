import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import Contact from '../Contact/Contact';
import AddContact from '../AddContact/AddContact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('contacts'); // начальная страница

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Provider store={store}>
      <Router>
        <div>
          <div>
            <Link to="/">Список контактов</Link>
            <Link to="/newcontact">Добавить контакт</Link>
          </div>
          <Routes>
            <Route
              path="/"
              element={<Contact onPageChange={handlePageChange} />}
            />
            <Route
              path="/newcontact"
              element={<AddContact />}
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;