import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LvButton from '../../shared/components/lvButton';
import {useBearStore} from '../../store';
import {createSelectors} from '../../store/selectors';

const ScreenC: React.FC = () => {
  const useBear = createSelectors(useBearStore);

  const increasePopulation = useBear.use.increasePopulation();

  console.log('render ScreenC');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen C</Text>
      <LvButton
        title="Increase Nut"
        onPress={increasePopulation}
        preset="outline"
      />
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

export default ScreenC;
