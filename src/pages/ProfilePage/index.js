import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import smilies from 'assets/smilies.svg';
import defaultProfile from 'assets/default_profile.svg';

import { getProfile, updatePassword, deleteAccount } from 'redux/actions/userActions';
import useForm from 'hooks/useForm';

import withMap from 'components/HOCs/withMap';
import Button from 'components/common/button/Button';
import FormInput from 'components/common/formInput/FormInput';

const config = {
  currentPassword: { presence: true, minLength: 6 },
  password: { presence: true, minLength: 6 },
  confirmPassword: { presence: true, equalsTo: 'password' }
};

const ProfilePage = () => {
  const user = useSelector(({ user: { value } }) => value);
  const { data, validation, validForm, handleFieldChange } = useForm(config);

  const error = useSelector(({ user: { error } }) => error);
  const dispatch = useDispatch();

  useEffect(() => {
    user && dispatch(getProfile(user.id));
  }, []);

  const handleFormSubmit = event => {
    event.preventDefault();
    if (validForm) dispatch(updatePassword(data));
  };

  const handleOnDelete = event => {
    event.preventDefault();
    user && dispatch(deleteAccount(user.id));
  };

  return (
    <div className="column inside-column-left inside-column-left--display-content-beginning">
      <div className="profile-container">
        <div className="profile-container__profile-picture">
          <img src={defaultProfile} alt="default profile" />
        </div>
        <span className="profile-container__username">{user?.username || <>&nbsp;</>}</span>
      </div>
      <div className="column__body">
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form_error">
            <span className="form_error__message">{error}</span>
          </div>
          <div className="form_input">
            <FormInput title="email" value={user?.email} disabled />
          </div>
          <div className="form_input">
            <FormInput
              title="current password"
              type="password"
              value={data.currentPassword}
              onChange={handleFieldChange('currentPassword')}
              valid={validation.currentPassword}
              placeholder="MIN. 6 CHARACTERS LONG"
            />
          </div>
          <div className="form_input">
            <FormInput
              title="new password"
              type="password"
              value={data.password}
              onChange={handleFieldChange('password')}
              valid={validation.password}
              placeholder="MIN. 6 CHARACTERS LONG"
            />
          </div>
          <div className="form_input">
            <FormInput
              title="confirm new password"
              type="password"
              value={data.confirmPassword}
              onChange={handleFieldChange('confirmPassword')}
              valid={validation.confirmPassword}
            />
          </div>
          <div className="form_input">
            <Button disabled={!validForm} submit value="save changes" />
          </div>
          <div className="form_input">
            <a onClick={handleOnDelete}>Delete my TARGET account</a>
          </div>
        </form>
      </div>
      <div className="column__footer">
        <img src={smilies} alt="smilies" className="column__footer" />
      </div>
    </div>
  );
};

export default withMap(ProfilePage);
