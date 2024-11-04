import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LvButton from '../../shared/components/lvButton';
import {useBearStore} from '../../store';

const ScreenA: React.FC = () => {
  const {increasePopulation, removeAllBears, increaseNut} = useBearStore();
  console.log('render ScreenA');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bear Counter</Text>
      <LvButton
        title="Increase"
        onPress={increasePopulation}
        preset="outline"
      />
      <LvButton title="Increase Nut" onPress={increaseNut} preset="outline" />
      <LvButton title="Reset" onPress={removeAllBears} preset="outline" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  counter: {
    fontSize: 48,
    marginBottom: 32,
  },
});

export default ScreenA;
