import React from 'react';

import i6Phone from 'assets/i6.svg';
import play from 'assets/play.svg';
import appStore from 'assets/appstore-button.svg';
import facebook from 'assets/Facebook.svg';
import twitter from 'assets/Twitter.svg';
import './LandingSidebar.scss';

const LandingSidebar = () => (
  <div className="column column--backgroud column--align_content">
    <div className="phone">
      <img src={i6Phone} alt="i6-phone" className="phone__phone-image--size"></img>
      <img src={play} alt="play" className="phone__play-button"></img>
    </div>
    <img src={appStore} alt="appstore-button"></img>
    <div className="row">
      <img src={facebook} alt="facebook" className="row__icon"></img>
      <img src={twitter} alt="twitter" className="row__icon"></img>
    </div>
  </div>
);

export default LandingSidebar;
