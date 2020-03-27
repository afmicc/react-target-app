import React from 'react';

import smilies from 'assets/smilies.svg';
import LandingSidebar from 'components/landingSidebar/LandingSidebar';

const NotFoundPage = () => (
  <div className="page-container">
    <div className="column column--side-padding column--center-content">
      <img src={smilies} alt="smilies"></img>
      <h1 className="column__header column__header--no-transform">Oops!</h1>
      <h2 className="column__subheader">Page not found</h2>
      <p className="column__text">
        Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.
      </p>
    </div>
    <LandingSidebar />
  </div>
);

export default NotFoundPage;
