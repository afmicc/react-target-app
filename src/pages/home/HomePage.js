import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './HomePage.css';
import LandingSidebar from 'components/landingSidebar/LandingSidebar';
import SignInForm from 'components/signInForm/SignInForm';
import Header from 'components/common/header/Header';
import routes from 'constants/routes';

const HomePage = () => {
  const authenticated = useSelector(state => state.user.auth);

  if (authenticated) {
    return <Redirect to={routes.welcome} />;
  }

  return (
    <div className="page-container">
      <div className="column column--side-padding">
        <Header header="Target MVD" subheader="Find people near you" />
        <p className="column__text">
          Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc and
          start conecting with others who share your interest.
        </p>
        <SignInForm />
      </div>
      <LandingSidebar />
    </div>
  );
};

export default HomePage;
