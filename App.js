import 'react-native-gesture-handler';
import React, { useContext, useState } from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import MainNavigator from './app/navigation/MainNavigator'
import AuthContext from './app/auth/context';

import global from './app/config/global';
import WelcomeNavigator from './app/navigation/screenNavigators/WelcomeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import useAuth from './app/auth/useAuth';

Amplify.configure(awsconfig);

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    if (user) setUser(user);
  };

  if (!isReady)
  return (
    <AppLoading startAsync={restoreUser} onError={()=> {setIsReady(true);console.log("error app loading")}} onFinish={() => setIsReady(true)} />
  );
  
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <SafeAreaView style={styles.container}>
        <MainNavigator></MainNavigator>
      </SafeAreaView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? global.statusBarHeight : 0,
  },
});
