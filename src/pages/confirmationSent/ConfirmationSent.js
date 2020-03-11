import React from 'react';

import './ConfirmationSent.css';
import smilies from 'assets/smilies.svg';
import LandingSidebar from 'components/landingSidebar/LandingSidebar';

const ConfirmationSent = () => (
  <div className="page-container">
    <div className="column column--side-padding column--center-content">
      <img src={smilies} alt="smilies"></img>
      <span className="column__header column__header--no-transform">Yey!</span>
      <span className="column__subheader">Only one more step to start enjoying </span>
      <span className="column__header">target</span>
      <p className="column__text">
        We’ve sent an email to confirm your account.
        <br />
        Please check your inbox.
      </p>
    </div>
    <LandingSidebar />
  </div>
);

export default ConfirmationSent;
