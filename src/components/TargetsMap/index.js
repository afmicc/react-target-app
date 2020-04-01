import React, { useEffect, memo } from 'react';
import { usePosition } from 'use-position';
import { useSelector, useDispatch } from 'react-redux';
import { getTargets } from 'redux/actions/targetAction';
import { getTopics } from 'redux/actions/topicAction';

import './TargetsMap.scss';
import currentLocation from 'assets/current_location.svg';
import GoogleMap from './GoogleMap';
import TargetIndicator from './TargetIndicator';
import Indicator from './Indicator';

const zoom = 15;
const page = 1;

const TargetsMap = () => {
  const { latitude, longitude } = usePosition(true);
  const targets = useSelector(({ target: { values } }) => values);
  const topics = useSelector(({ topic: { values } }) => values);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTargets(page));
    dispatch(getTopics());
  }, []);

  return (
    <div className="maps-container">
      {latitude && longitude && (
        <GoogleMap coords={{ latitude, longitude }} zoom={zoom}>
          <Indicator lat={latitude} lng={longitude} icon={currentLocation} label="You're here!" />
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
