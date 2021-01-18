import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import MainNavigator from './app/navigation/MainNavigator'

import global from './app/config/global';
import ProviderWrapper from './app/provider/ProviderWrapper';


Amplify.configure(awsconfig);

export default function App() {
  //state for if app is loaded
  const [isReady, setIsReady] = useState(false);

  //check if user is already logged in on app start
  const restoreUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    if (user) setUser(user);
  };

  //If App isn't ready display loading screen or 
  if (!isReady)
  return (
    <AppLoading startAsync={restoreUser} onError={()=> {setIsReady(true);console.log("error app loading")}} onFinish={() => setIsReady(true)} />
  );
  
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
