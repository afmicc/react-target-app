import { useEffect, useState } from 'react';

export default rules => {
  const [data, setData] = useState(getInitialState(rules, ''));
  const [valid, setValid] = useState(getInitialState(rules, undefined));
  const [touched, setTouched] = useState(getInitialState(rules, false));

  useEffect(() => {
    let result = {};
    for (const [fieldName, fieldValidations] of Object.entries(rules)) {
      result = {
        ...result,
        [fieldName]: runValidations(fieldName, fieldValidations, data, touched)
      };
    }
    setValid(result);
  }, [rules, data, touched]);

  const handleFieldChange = key => ({ target: { value } }) => {
    setData({ ...data, [key]: value });
    setTouched({ ...touched, [key]: true });
  };

  return {
    data,
    validation: valid,
    validForm: validForm(valid),
    handleFieldChange
  };
};

const getInitialState = (fields, initValue) => {
  const keys = Object.keys(fields);
  let state = {};
  for (const key of keys) {
    state = {
      ...state,
      [key]: fields[key].initValue || initValue
    };
  }
  return state;
};

const runValidations = (fieldName, fieldValidations, fields, fieldsTouched) => {
  let valid = true;
  const fieldValue = fields[fieldName];

  const touched = fieldsTouched[fieldName];
  if (!touched) return undefined;

  for (const [validation, params] of Object.entries(fieldValidations)) {
    switch (validation) {
      case 'presence':
        if (params) valid = valid && !!fieldValue;
        break;
      case 'minLength':
        if (params) valid = valid && fieldValue?.length >= params;
        break;
      case 'equalsTo':
        if (params) valid = valid && fieldValue === fields[params];
        break;
      case 'regex':
        if (params) valid = valid && !!fieldValue.match(params);
        break;
      case 'number':
        if (params) valid = valid && !isNaN(fieldValue);
        break;
      default:
        valid = false;
        break;
    }
  }

  return valid;
};

const validForm = data => {
  const values = Object.values(data);
  return values.length && values.reduce((acc, value) => acc && value);
};
