import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ContactForm.css';
import Header from 'components/common/header/Header';
import FormInput from 'components/common/formInput/FormInput';
import FormTextArea from 'components/common/FormTextArea';
import Button from 'components/common/button/Button';

import useForm from 'hooks/useForm';
import { contactAdministrator } from 'redux/actions/contactAdministratorAction';
import { mailRegex } from 'constants/form';

const rules = {
  email: {
    presence: true,
    regex: mailRegex
  },
  message: { presence: true }
};

const ContactForm = () => {
  const { data, validation, validForm, handleFieldChange } = useForm(rules);
  const error = useSelector(({ contactAdministrator: { error } }) => error);

  const dispatch = useDispatch();
  const handleFormSubmit = event => {
    event.preventDefault();
    if (validForm) dispatch(contactAdministrator(data));
  };

  return (
    <>
      <Header subheader="Don’t be shy, drop us a line!" />
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form_error">
          <span className="form_error__message">{error}</span>
        </div>
        <div className="form_input form_input--full-width form_input--full-width">
          <FormInput
            title="email *"
            value={data.email}
            onChange={handleFieldChange('email')}
            valid={validation.email}
          />
        </div>
        <div className="form_input form_input--full-width">
          <FormTextArea
            title="message *"
            value={data.message}
            onChange={handleFieldChange('message')}
            valid={validation.message}
          />
        </div>
        <div className="form_input">
          <Button submit value="send" disabled={!validForm} />
        </div>
      </form>
    </>
  );
};

export default ContactForm;