import * as React from 'react';
import { bool, string } from 'prop-types';

const Button = ({ submit, value, ...props }) => (
  <div className="form_input">
    <button
      type={submit ? 'submit' : ''}
      className="form_input__field form_input__field--color"
      {...props}
    >
      {value}
    </button>
  </div>
);

Button.propTypes = {
  submit: bool,
  value: string.isRequired
};

export default Button;
