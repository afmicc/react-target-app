import React from 'react';
import { NavLink } from 'react-router-dom';

import './SignUpForm.css';

const SignUpForm = () => (
  <>
    <form className="form">
      <div className="form_input">
        <span className="form_input__title">email</span>
        <input type="text" className="form_input__field" />
      </div>
      <div className="form_input">
        <span className="form_input__title">password</span>
        <input type="password" className="form_input__field" />
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

export default SignUpForm;
