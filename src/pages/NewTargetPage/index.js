import React from 'react';

import './NewTargetPage.scss';
import smilies from 'assets/smilies.svg';

import TargetsMap from 'components/TargetsMap';
import TargetForm from 'components/TargetForm';

const NewTargetPage = () => (
  <div className="page-container">
    <div className="column inside-column-left inside-column-left--display-content-beginning">
      <div className="column__body column__body--full-content">
        <TargetForm />
      </div>
      <div className="column__footer">
        <img src={smilies} alt="smilies" className="column__footer" />
      </div>
    </div>

    <div className="column home-column-right">
      <TargetsMap />
    </div>
  </div>
);

export default NewTargetPage;
