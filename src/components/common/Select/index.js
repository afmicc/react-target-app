import React, { useState } from 'react';
import { arrayOf, bool, func, number, oneOfType, string, shape } from 'prop-types';

import './Select.scss';

const Select = ({ title, placeholder, options, valid, value, onChange }) => {
  const [display, setDisplay] = useState();
  const initValue = options?.find(opt => opt.key === value);
  const [selected, setSelected] = useState(initValue);

  const toggle = () => setDisplay(!display);
  const handleSelected = opt => {
    if (opt) {
      setSelected(opt);
      onChange({ target: { value: opt.key } });
    }
    toggle();
  };

  return (
    <>
      <span className="form_input__label">{title}</span>
      <div
        className={`form_input__field form__input__select ${
          valid === false ? 'form_input__field--error' : ''
        }`}
        onClick={toggle}
      >
        <span
          className={
            selected ? 'form__input__select__option--text-align' : 'form_input__field__placeholder'
          }
        >
          {selected ? (
            <>
              <img src={selected.icon} className="form__input__select__icon" alt={selected.value} />
              {selected.value}
            </>
          ) : (
            placeholder
          )}
        </span>
      </div>
      <div className="form__input__select__options">
        {display &&
          options?.map(opt => (
            <span
              key={opt.key}
              value={opt.key}
              className="form__input__select__option form__input__select__option--text-align"
              onClick={() => handleSelected(opt)}
            >
              <img src={opt.icon} className="form__input__select__icon" alt={opt.value} />
              {opt.value}
            </span>
          ))}
        {display && !options && (
          <span
            className="form__input__select__option form__input__select__option--text-align"
            onClick={toggle}
          >
            {'Loading...'}
          </span>
        )}
      </div>
    </>
  );
};

Select.propTypes = {
  title: string.isRequired,
  placeholder: string.isRequired,
  onChange: func,
  options: arrayOf(
    shape({
      key: number.isRequired,
      value: string.isRequired
    })
  ),
  valid: bool,
  value: oneOfType([string, number])
};

export default Select;
