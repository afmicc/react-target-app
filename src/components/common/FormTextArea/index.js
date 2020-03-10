import React from 'react';
import { string, bool } from 'prop-types';

const FormTextArea = ({ title, valid, ...props }) => (
  <>
    <span className="form_input__label">{title}</span>
    <textarea
      className={`form_input__field form_input__field--text-area ${
        valid === false ? 'form_input__field--error' : ''
      }`}
      {...props}
    />
  </>
);

FormTextArea.propTypes = {
  title: string.isRequired,
  valid: bool
};

export default FormTextArea;
