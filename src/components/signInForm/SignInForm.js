import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './SignInForm.scss';
import * as userActions from 'redux/actions/userActions';
import FormInput from 'components/common/formInput/FormInput';
import Button from 'components/common/button/Button';

const SignInForm = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [validation, setValidation] = useState({ email: undefined, password: undefined });
  const error = useSelector(state => state.user.error);
  const dispatch = useDispatch();

  const handleFieldChange = ({ target: { value } }, key) => {
    setUser({ ...user, [key]: value });
    setValidation({ ...validation, [key]: validField(key, value) });
  };

  const validField = (key, value) => !!value;
  const validForm = validation.email && validation.password;

  const handleFormSubmit = event => {
    event.preventDefault();
    if (validForm) dispatch(userActions.signIn(user));
  };

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form_error">
          <span className="form_error__message">{error}</span>
        </div>
        <div className="form_input">
          <FormInput
            title="email"
            value={user.email}
            onChange={event => handleFieldChange(event, 'email')}
            valid={validation.email}
          />
        </div>
        <div className="form_input">
          <FormInput
            title="password"
            type="password"
            value={user.password}
            onChange={event => handleFieldChange(event, 'password')}
            valid={validation.password}
          />
        </div>
        <Button submit value="sign in" disabled={!validForm} />
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

export default SignInForm;
