import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import MainNavigator from './app/navigation/MainNavigator'

import global from './app/config/global';
import ProviderWrapper from './app/provider/ProviderWrapper';


Amplify.configure(awsconfig);

export default function App() {
  
  return (
    <ProviderWrapper>
      <SafeAreaView style={styles.container}>
        <MainNavigator></MainNavigator>
      </SafeAreaView>
    </ProviderWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? global.statusBarHeight : 0,
  },
});