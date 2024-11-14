import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {ButtonPresets, ButtonPresetsName} from './preset';

type LvButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  preset?: ButtonPresetsName;
  isDisable?: boolean;
} & TouchableOpacityProps;

const LvButton: React.FC<LvButtonProps> = ({
  title,
  onPress,
  disabled = false,
  preset = 'default',
  isDisable = false,
  style,
}) => {
  const finalStyle = [
    styles.button,
    ButtonPresets[preset],
    StyleSheet.flatten(style),
    isDisable && styles.disableButton,
  ];
  const defaultTitleColor =
    preset === 'outline' ? {color: ButtonPresets[preset].borderColor} : {};
  return (
    <TouchableOpacity style={finalStyle} onPress={onPress} disabled={disabled}>
      <Text style={[styles.buttonText, defaultTitleColor]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  disableButton: {backgroundColor: '#D3D8E0', borderWidth: 0},
});

export default LvButton;
