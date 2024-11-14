/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LvButton from './shared/components/LvButton';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import ScreenC from './screens/ScreenC';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LvButton title="Click me" onPress={() => {}} preset="outline" />
      <ScreenA />
      <ScreenB />
      <ScreenC />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
