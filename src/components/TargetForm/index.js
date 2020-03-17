import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useForm from 'hooks/useForm';
import FormInput from 'components/common/formInput/FormInput';
import Button from 'components/common/button/Button';
import Select from 'components/common/Select';
import newTarget from 'assets/new_target.svg';

import { createTarget } from 'redux/actions/targetAction';

const config = {
  title: { presence: true },
  radius: { presence: true, number: true },
  topic_id: { presence: true, number: true }
};

const TargetForm = () => {
  const [lat, lng] = useSelector(({ target: { value } }) => [value?.lat, value?.lng]);
  const { data, validation, validForm, handleFieldChange } = useForm(config);
  const validTarget = lat && lng && validForm;

  const dispatch = useDispatch();
  const error = useSelector(({ target: { error } }) => error);
  const topics = useSelector(({ topic: { values } }) =>
    values?.map(({ topic: { id, label, icon } }) => ({ key: id, value: label, icon }))
  );

  const handleFormSubmit = event => {
    event.preventDefault();
    if (validTarget) dispatch(createTarget({ ...data, lat, lng }));
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form_input">
        <img src={newTarget} alt="new target" />
        <h1 className="form_input__label">CREATE NEW TARGET</h1>
      </div>
      <div className="form_error">
        <span className="form_error__message">{error}</span>
        {validForm && !validTarget && (
          <span className="form_error__message">Select a location</span>
        )}
      </div>
      <div className="form_input">
        <FormInput
          title="SPECIFY AREA LENGHT"
          value={data.radius}
          onChange={handleFieldChange('radius')}
          valid={validation.radius}
        />
      </div>
      <div className="form_input">
        <FormInput
          title="TARGET TITLE"
          value={data.title}
          onChange={handleFieldChange('title')}
          valid={validation.title}
          placeholder="Choose a title for your target"
        />
      </div>
      <div className="form_input">
        <Select
          title="SELECT A TOPIC"
          placeholder="What do you want to talk about?"
          options={topics}
          value={data.topic_id}
          onChange={handleFieldChange('topic_id')}
          valid={validation.topic_id}
        />
      </div>
      <div className="form_input form__footer">
        <Button disabled={!validTarget} submit value="SAVE TARGET" />
      </div>
    </form>
  );
};

export default TargetForm;
