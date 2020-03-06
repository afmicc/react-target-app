import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignUpForm from 'components/signUpForm/SignUpForm';
import LandingSidebar from 'components/landingSidebar/LandingSidebar';

export const SignUpPage = () => {
  const user = useSelector(({ user: { value } }) => value);
  if (user) {
    return <Redirect to="/confirmation-sent" />;
  }

  return (
    <div className="page-container">
      <div className="column column--side-padding">
        <span className="column__header">SIGN UP</span>
        <SignUpForm />
      </div>
      <LandingSidebar />
    </div>
  );
};

export default SignUpPage;
