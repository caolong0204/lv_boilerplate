import React from 'react';
import {View} from 'react-native';

import {SpacerProps} from './type';

const Space = ({height = 0, width = 0}: SpacerProps) => {
  return <View style={{width, height}} />;
};

export default Space;
