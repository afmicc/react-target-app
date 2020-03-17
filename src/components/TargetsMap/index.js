import React, { useEffect, memo } from 'react';
import { usePosition } from 'use-position';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getTargets, addTarget } from 'redux/actions/targetAction';
import { getTopics } from 'redux/actions/topicAction';
import routes from 'constants/routes';

import './TargetsMap.scss';
import currentLocationIcon from 'assets/current_location.svg';
import newTargetIcon from 'assets/new_target.svg';
import GoogleMap from './GoogleMap';
import TargetIndicator from './TargetIndicator';
import Indicator from './Indicator';

const zoom = 15;

const TargetsMap = () => {
  const { latitude, longitude } = usePosition(true);
  const targets = useSelector(({ target: { values } }) => values);
  const topics = useSelector(({ topic: { values } }) => values);
  const newTarget = useSelector(({ target: { value } }) => value);
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTargets(1));
    dispatch(getTopics());
  }, []);

  const handleNewTarget = location => {
    dispatch(addTarget(location));
    history.push(routes.newTarget);
  };

  return (
    <div className="maps-container">
      {latitude && longitude && (
        <GoogleMap coords={{ latitude, longitude }} zoom={zoom} onClick={handleNewTarget}>
          <Indicator
            lat={latitude}
            lng={longitude}
            icon={currentLocationIcon}
            label="You're here!"
          />
          {newTarget && (
            <Indicator
              lat={newTarget.lat}
              lng={newTarget.lng}
              icon={newTargetIcon}
              label="Creating target here..."
              background
            />
          )}
          {topics &&
            targets?.map(({ target: { id, lat, lng, ...props } }) => (
              <TargetIndicator key={id} lat={lat} lng={lng} target={props} topics={topics} />
            ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default memo(TargetsMap);
