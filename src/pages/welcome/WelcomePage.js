import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import './WelcomePage.scss';
import routes from 'constants/routes';
import smilies from 'assets/smilies.svg';
import Button from 'components/common/button/Button';

const WelcomePage = () => {
  const authenticated = useSelector(({ user: auth }) => auth);
  const history = useHistory();
  const handleClick = () => history.push(routes.dashboard);

  if (!authenticated) {
    return <Redirect to={routes.home} />;
  }

  return (
    <div className="page-container">
      <div className="column home-column-left">
        <img src={smilies} alt="smilies"></img>
        <h1 className="column__header column__header--no-transform column__header--no-bold">
          Welcome to <strong>TARGET</strong>
        </h1>
        <h2 className="column__subheader">Find people near you & Connect</h2>
        <div className="home-list">
          <div className="home-list__option">
            <span className="home-list__bullet"></span>
            <p className="home-list__label">
              Create a target by clicking wherever on the map, specify the ratio and a topic:
              Travel, Dating, Music, etc.
            </p>
          </div>
          <div className="home-list__option">
            <span className="home-list__bullet"></span>
            <p className="home-list__label">
              <strong>TARGET</strong> will start a chat whenever you have a match. You can always
              dismiss a conversation if you’re not interested.
            </p>
          </div>
        </div>
        <Button value="OK; GOT IT!" onClick={handleClick} />
      </div>
      <div className="column home-column-right">map here!</div>
    </div>
  );
};

export default WelcomePage;
