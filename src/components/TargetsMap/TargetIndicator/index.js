import React, { memo } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import Indicator from '../Indicator';

const TargetIndicator = ({ target: { title, topicId }, topics }) => {
  const { topic: { icon, label } } = topics?.find(x => x.topic.id === topicId);
  return <Indicator title={title} icon={icon} label={label} background />;
};

TargetIndicator.propTypes = {
  target: shape({
    title: string.isRequired,
    topicId: number
  }),
  topics: arrayOf({
    topic: shape({
      id: number.isRequired,
      label: string.isRequired,
      icon: string
    })
  })
};

export default memo(TargetIndicator);
