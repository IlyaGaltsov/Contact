import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddContact = ({ addContact, setPage }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Введіть ім\'я'),
      lastName: Yup.string().required('Введіть прізвище'),
      phone: Yup.string().required('Введіть номер телефону'),
    }),
    onSubmit: (values) => {
      const newContact = { firstName: values.firstName, lastName: values.lastName, phone: values.phone };
      addContact(newContact);
      formik.resetForm();
      setPage('contacts');
    },
  });

  return (
    <div>
      <h2>Додати контакт</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Ім'я:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div>{formik.errors.firstName}</div>
        )}

        <label htmlFor="lastName">Прізвище:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div>{formik.errors.lastName}</div>
        )}

        <label htmlFor="phone">Телефон:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div>{formik.errors.phone}</div>
        )}

        <button type="submit">Зберегти</button>
        <button type="button" onClick={() => setPage('contacts')}>
          Скасувати
        </button>
      </form>
    </div>
  );
};

export default AddContact;