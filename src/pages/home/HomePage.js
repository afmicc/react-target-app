import React from 'react';
import './HomePage.css';

import smilies from '../../assets/smilies.svg';
import LandingSidebar from '../../components/landingSidebar/LandingSidebar';
import SignUpForm from '../../components/signUpForm/SignUpForm';

const HomePage = () => (
  <div className="home-page-container">
    <div className="column column--side-padding">
      <img src={smilies} alt="smilies"></img>
      <span className="column__header">Target MVD</span>
      <span className="column__subheader">Find people near you</span>
      <p className="column__text">
        Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc and
        start conecting with others who share your interest.
      </p>
      <SignUpForm />
    </div>
    <LandingSidebar />
  </div>
);

export default HomePage;
