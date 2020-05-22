import React from 'react';
import { useHistory } from 'react-router-dom';

import './NewTargetPage.scss';
import smilies from 'assets/smilies.svg';
import backArrow from 'assets/back_arrow.svg';

import TargetForm from 'components/TargetForm';
import withMap from 'components/HOCs/withMap';

const NewTargetPage = () => {
  const history = useHistory();
  const handleGoBack = () => history.goBack();

  return (
    <div className="column inside-column-left inside-column-left--display-content-beginning">
      <div className="column__bar">
        <div className="column__bar__back-arrow" onClick={handleGoBack}>
          <img src={backArrow} alt="back arrow" />
        </div>
        <span className="column__bar__label">CREATE TARGET</span>
      </div>
      <div className="column__body column__body--full-content">
        <TargetForm />
      </div>
      <div className="column__footer">
        <img src={smilies} alt="smilies" className="column__footer" />
      </div>
    </div>
  );
};

export default withMap(NewTargetPage);
