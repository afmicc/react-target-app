import * as React from 'react';
import PropTypes from 'prop-types';

const Button = ({ submit, ...props }) => (
  <div className="form_input">
    <input
      type={submit ? 'submit' : 'button'}
      className="form_input__field form_input__field--color"
      {...props}
    />
  </div>
);

Button.propTypes = {
  submit: PropTypes.bool
};

export default Button;
