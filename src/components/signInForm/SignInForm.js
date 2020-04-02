import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import './SignInForm.scss';
import * as userActions from 'redux/actions/userActions';
import FormInput from 'components/common/formInput/FormInput';
import Button from 'components/common/button/Button';

import routes from 'constants/routes';

const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

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

  const handleFacebookCallback = ({ accessToken }) =>
    accessToken && dispatch(userActions.facebookSignIn(accessToken));

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
      <NavLink to={routes.forgotPassword} className="column__forgot-password">
        Forgot your password?
      </NavLink>
      <FacebookLogin
        appId={facebookAppId}
        callback={handleFacebookCallback}
        render={({ onClick }) => (
          <a className="column__conect-with-facebook" onClick={onClick}>
            connect with facebook
          </a>
        )}
      />
      <div className="column__line"></div>
      <NavLink to={routes.signUp} className="column__sign-up">
        sign up
      </NavLink>
    </>
  );
};

export default SignInForm;
