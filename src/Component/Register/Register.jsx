import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';

export default function Register() {
  let user = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
    phone: '',
  };

  async function registerNewUser(values) {
    console.log('sending data to backend');
    // const { data } = await axios
    //   .post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
    //   .catch(function (error) {
    //     console.log('error eccuord', error);
    //     console.log(error.response.data.message);
    //   });

    try {
      const { data } = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/auth/signup',
        values
      );

      console.log(data);

      if (data === 'success') {
      }
    } catch (err) {
      console.log('error', err.response.data.message);
    }
  }

  function validateValues(values) {
    const error = {};

    if (values.name.length < 4 || values.name.length > 10) {
      error.name = 'name must be from 4 to 10 char ';
    }

    if (
      values.email.includes('@') === false ||
      values.email.includes('.') === false
    ) {
      error.email = 'email must include @ and "." ';
    }
    if (!values.phone.match(/^(02)?01[0125][0-9]{8}/)) {
      error.phone = 'phone in valid';
    }
    if (values.password.length < 4 || values.password.length > 12) {
      error.password = 'password must be from 4 to 12 char ';
    }

    if (values.rePassword !== values.password) {
      error.rePassword = 'not match';
    }
    console.log(error);
    return error;
  }

  //map with form and formik
  const formkObj = useFormik({
    initialValues: user,
    onSubmit: registerNewUser,
    validate: validateValues,
  });

  return (
    <>
      <div className="w-75 m-auto py-5">
        <h2>Register Now:</h2>
        <form onSubmit={formkObj.handleSubmit} className="position-relative ">
          <label htmlFor="name">Name:</label>
          <input
            onChange={formkObj.handleChange}
            onBlur={formkObj.handleBlur}
            value={formkObj.values.name}
            id="name"
            placeholder="Name:"
            type="text"
            className="form-control mb-3"
          />
          {formkObj.errors.name && formkObj.touched.name ? (
            <div className="alert alert-danger"> {formkObj.errors.name}</div>
          ) : (
            ''
          )}

          <label htmlFor="email">email:</label>
          <input
            onChange={formkObj.handleChange}
            onBlur={formkObj.handleBlur}
            value={formkObj.values.email}
            id="email"
            placeholder="email:"
            type="email"
            className="form-control mb-3"
          />
          {formkObj.errors.email && formkObj.touched.email ? (
            <div className="alert alert-danger"> {formkObj.errors.email}</div>
          ) : (
            ''
          )}

          <label htmlFor="phone">phone:</label>
          <input
            onChange={formkObj.handleChange}
            onBlur={formkObj.handleBlur}
            value={formkObj.values.phone}
            id="phone"
            placeholder="phone:"
            type="tel"
            className="form-control mb-3"
          />
          {formkObj.errors.phone && formkObj.touched.phone ? (
            <div className="alert alert-danger"> {formkObj.errors.phone}</div>
          ) : (
            ''
          )}

          <label htmlFor="password">password:</label>
          <input
            onChange={formkObj.handleChange}
            onBlur={formkObj.handleBlur}
            value={formkObj.values.password}
            id="password"
            placeholder="password:"
            type="password"
            className="form-control mb-3"
          />
          {formkObj.errors.password && formkObj.touched.password ? (
            <div className="alert alert-danger">
              {' '}
              {formkObj.errors.password}
            </div>
          ) : (
            ''
          )}
          <label htmlFor="rePassword">rePassword:</label>
          <input
            onChange={formkObj.handleChange}
            onBlur={formkObj.handleBlur}
            value={formkObj.values.rePassword}
            id="rePassword"
            placeholder="rePassword:"
            type="password"
            className="form-control mb-3"
          />
          {formkObj.errors.rePassword && formkObj.touched.rePassword ? (
            <div className="alert alert-danger">
              {' '}
              {formkObj.errors.rePassword}
            </div>
          ) : (
            ''
          )}
          <button
            disabled={formkObj.isValid === false || formkObj.dirty === false}
            type="submit"
            className="btn btn-success position-absolute end-0"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
