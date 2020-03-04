import React, { memo } from 'react';
import { bool, string } from 'prop-types';

const FormInput = ({ title, valid, ...props }) => (
  <>
    <span className="form_input__label">{title}</span>
    <input
      type="text"
      className={`form_input__field ${valid === false ? 'form_input__field--error' : ''}`}
      {...props}
    />
  </>
);

FormInput.propTypes = {
  title: string.isRequired,
  valid: bool
};

export default memo(FormInput);
