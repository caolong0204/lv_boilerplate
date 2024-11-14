import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useBear} from '../../store/selectors/bearSelector';

const ScreenB: React.FC = () => {
  const bears = useBear.use.bears();
  const bears2 = useBear.use.bears2();

  console.log('render ScreenB');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bear Counter</Text>
      <Text style={styles.counter}>{bears}</Text>
      <Text style={styles.counter}>{bears2}</Text>
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

export default ScreenB;
