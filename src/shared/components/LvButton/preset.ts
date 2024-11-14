import {StyleSheet} from 'react-native';
import {sizeScale} from '../../helper';
import {Colors} from '../../themes';

const defaultDimenssion = {
  minWidth: sizeScale(80),
  minHeight: sizeScale(30),
  paddingVertical: sizeScale(8),
  paddingHorizontal: sizeScale(12),
};

export const ButtonPresets = StyleSheet.create({
  default: {
    ...defaultDimenssion,
    backgroundColor: Colors.info500,
    borderWidth: 0,
  },
  primary: {
    ...defaultDimenssion,
    backgroundColor: Colors.info500,
    borderWidth: 0,
  },
  outline: {
    ...defaultDimenssion,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.info500,
  },
});

export type ButtonPresetsName = keyof typeof ButtonPresets;
