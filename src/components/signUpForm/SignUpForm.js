import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './SignUpForm.css';
import * as userActions from '../../redux/actions/userActions';

const SignUpForm = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const error = useSelector(state => state.user.error);
  const dispatch = useDispatch();

  const handleEmailChange = event => {
    const newUser = { ...user, email: event.target.value };
    setUser(newUser);
  };

  const handlePasswordChange = event => {
    const newUser = { ...user, password: event.target.value };
    setUser(newUser);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(userActions.signIn(user));
  };

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form_error">
          <span className="form_error__message">{error}</span>
        </div>
        <div className="form_input">
          <span className="form_input__title">email</span>
          <input
            type="text"
            className="form_input__field"
            value={user.email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form_input">
          <span className="form_input__title">password</span>
          <input
            type="password"
            className="form_input__field"
            value={user.password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form_input">
          <input
            type="submit"
            className="form_input__field form_input__field--color"
            value="sign in"
          />
        </div>
      </form>
      <NavLink to="/forgot-password" className="column__forgot-password">
        Forgot your password?
      </NavLink>
      <NavLink to="/facebook-login" className="column__conect-with-facebook">
        connect with facebook
      </NavLink>
      <div className="column__line"></div>
      <NavLink to="/sign-up" className="column__sign-up">
        sign up
      </NavLink>
    </>
  );
};

export default SignUpForm;
