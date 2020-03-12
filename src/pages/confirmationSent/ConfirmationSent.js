import React from 'react';

import './ConfirmationSent.scss';
import smilies from 'assets/smilies.svg';
import LandingSidebar from 'components/landingSidebar/LandingSidebar';

const ConfirmationSent = () => (
  <div className="page-container">
    <div className="column column--side-padding column--center-content">
      <img src={smilies} alt="smilies"></img>
      <h1 className="column__header column__header--no-transform">Yey!</h1>
      <h2 className="column__subheader">Only one more step to start enjoying </h2>
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
