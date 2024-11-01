/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LvButton from './shared/components/lvButton';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <LvButton title="Click me" onPress={() => {}} preset="outline" />
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
