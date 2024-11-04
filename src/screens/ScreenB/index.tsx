import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useBearStore} from '../../store';
import {useShallow} from 'zustand/shallow';

const ScreenA: React.FC = () => {
  const {nuts, bears} = useBearStore(
    useShallow(state => ({nuts: state.nuts, bears: state.bears})),
  );

  console.log('render ScreenB');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bear Counter</Text>
      <Text style={styles.counter}>{bears}</Text>
      <Text style={styles.counter}>{nuts}</Text>
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
