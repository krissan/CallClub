import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';

import MainNavigator from './app/navigation/MainNavigator'

import global from './app/config/global';

export default function App() {
  console.log(Platform.OS);
  console.log(global.statusBarHeight);
  console.log(global.bodyHeight);

  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator></MainNavigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? global.statusBarHeight : 0,
  },
});
