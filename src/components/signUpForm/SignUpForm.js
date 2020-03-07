import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './SignUpForm.css';
import { signUp } from 'redux/actions/userActions';
import FormInput from 'components/common/formInput/FormInput';
import FormSelect from 'components/common/formSelect/FormSelect';
import useForm from 'hooks/useForm';

const config = {
  username: { presence: true },
  email: { presence: true },
  password: { presence: true, minLength: 8 },
  confirmPassword: { presence: true, equalsTo: 'password' },
  gender: { presence: true }
};

const genders = [
  { key: '', value: 'Select your gender' },
  { key: 'male', value: 'Male' },
  { key: 'female', value: 'Female' },
  { key: 'other', value: 'Other' }
];

const SignUpForm = () => {
  const { data, validation, validForm, handleFieldChange } = useForm(config);

  const dispatch = useDispatch();
  const error = useSelector(({ user: { error } }) => error);

  const handleFormSubmit = event => {
    event.preventDefault();
    if (validForm) dispatch(signUp(data));
  };

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form_error">
          <span className="form_error__message">{error}</span>
        </div>
        <div className="form_input">
          <FormInput
            title="name"
            value={data.username}
            onChange={handleFieldChange('username')}
            valid={validation.username}
          />
        </div>
        <div className="form_input">
          <FormInput
            title="email"
            value={data.email}
            onChange={handleFieldChange('email')}
            valid={validation.email}
          />
        </div>
        <div className="form_input">
          <FormInput
            title="password"
            type="password"
            value={data.password}
            onChange={handleFieldChange('password')}
            valid={validation.password}
            placeholder=""
          />
        </div>
        <div className="form_input">
          <FormInput
            title="confirm password"
            type="password"
            value={data.confirmPassword}
            onChange={handleFieldChange('confirmPassword')}
            valid={validation.confirmPassword}
          />
        </div>
        <div className="form_input">
          <FormSelect
            title="gender"
            value={data.gender}
            onChange={handleFieldChange('gender')}
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
