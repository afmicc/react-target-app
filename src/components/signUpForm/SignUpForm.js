import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './SignUpForm.css';
import * as userActions from 'redux/actions/userActions';
import FormInput from 'components/common/formInput/FormInput';
import FormSelect from 'components/common/formSelect/FormSelect';

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });
  const [validation, setValidation] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
    gender: undefined
  });
  const error = useSelector(({ user: { error } }) => error);
  const dispatch = useDispatch();

  const handleFieldChange = ({ target: { value } }, key, params) => {
    setUser({ ...user, [key]: value });
    setValidation({ ...validation, [key]: validField(key, value, params) });
  };

  const validField = (key, value, params) =>
    ({
      name: () => !!value,
      email: () => !!value,
      gender: () => !!value,
      password: () => !!value && value.length >= 8,
      confirmPassword: () => !!value && !!params.compareTo && value === params.compareTo
    }[key]() || false);

  const validForm = Object.values(validation).reduce((acc, value) => acc && value);

  const handleFormSubmit = event => {
    event.preventDefault();
    if (validForm) dispatch(userActions.signUp(user));
  };

  const genders = [
    { key: '', value: 'Select your gender' },
    { key: 'male', value: 'Male' },
    { key: 'female', value: 'Female' },
    { key: 'other', value: 'Other' }
  ];

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form_error">
          <span className="form_error__message">{error}</span>
        </div>
        <div className="form_input">
          <FormInput
            title="name"
            value={user.name}
            onChange={event => handleFieldChange(event, 'name')}
            valid={validation.name}
          />
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
            placeholder=""
          />
        </div>
        <div className="form_input">
          <FormInput
            title="confirm password"
            type="password"
            value={user.confirmPassword}
            onChange={event =>
              handleFieldChange(event, 'confirmPassword', { compareTo: user.password })
            }
            valid={validation.confirmPassword}
          />
        </div>
        <div className="form_input">
          <FormSelect
            title="gender"
            value={user.gender}
            onChange={event => handleFieldChange(event, 'gender')}
            valid={validation.gender}
            options={genders}
          />
        </div>
        <div className="form_input">
          <input
            type="submit"
            className="form_input__field form_input__field--color"
            value="sign up"
            disabled={!validForm}
          />
        </div>
      </form>
      <div className="column__line column__line--margin"></div>
      <NavLink to="/" className="column__sign-up">
        sign in
      </NavLink>
    </>
  );
};

export default SignUpForm;
