import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './DashboardPage.scss';
import smilies from 'assets/smilies.svg';
import defaultProfile from 'assets/default_profile.svg';
import football from 'assets/football.svg';
import music from 'assets/music.svg';
import world from 'assets/world.svg';

import { getProfile, logout } from 'redux/actions/userActions';
import TargetsMap from 'components/TargetsMap';

const WelcomePage = () => {
  const user = useSelector(({ user: { value } }) => value);

  const dispatch = useDispatch();
  useEffect(() => {
    user && dispatch(getProfile(user.id));
  }, []);

  const handleLogOut = event => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="page-container">
      <div className="column inside-column-left inside-column-left--display-content-beginning">
        <div className="profile-container">
          <h1 className="column__header column__header--text-center">TARGET</h1>
          <div className="profile-container__profile-picture">
            <img src={defaultProfile} alt="default profile" />
          </div>
          <span className="profile-container__username">{user?.username || <>&nbsp;</>}</span>
          <div>
            <a className="profile-container__buttons profile-container__buttons--edit-color">
              Edit
            </a>
            <span>/</span>
            <a className="profile-container__buttons" onClick={handleLogOut}>Logout</a>
          </div>
          <div className="column__line column__line--margin-top"></div>
        </div>
        <div className="column__body">
          <h2 className="column__subheader column__header--text-center">
            Create your first target by clicking wherever on the map.
          </h2>
          <span className="popular-target-label">Psss!, these are the most popular targets:</span>
          <div className="popular-target-list">
            <div className="popular-target-list__option">
              <img src={football} alt="football" className="popular-target-list__option__icon" />
              <span className="popular-target-list__option__label">football</span>
            </div>
            <div className="popular-target-list__option">
              <img src={world} alt="wolrd" className="popular-target-list__option__icon" />
              <span className="popular-target-list__option__label">travel</span>
            </div>
            <div className="popular-target-list__option">
              <img src={music} alt="music" className="popular-target-list__option__icon" />
              <span className="popular-target-list__option__label">music</span>
            </div>
          </div>
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
};

export default WelcomePage;
