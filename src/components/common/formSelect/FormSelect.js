import React from 'react';
import { string, bool, array } from 'prop-types';

const FormSelect = ({ title, valid, options, ...props }) => (
  <>
    <span className="form_input__label">{title}</span>
    <select
      className={`form_input__field form_input__select form_input__select--centered-text ${
        valid === false ? 'form_input__field--error' : ''
      }`}
      {...props}
    >
      {options.map(opt => (
        <option key={opt.key} value={opt.key}>
          {opt.value}
        </option>
      ))}
    </select>
  </>
);

FormSelect.propTypes = {
  title: string.isRequired,
  valid: bool,
  options: array.isRequired
};

export default FormSelect;
