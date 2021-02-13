import React, {useState,useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import DrawerContent from './navComponents/DrawerContent';
import BottomTabNavigator from './BottomTabNavigator';

import useAuth from '../provider/auth/useAuth';

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  const auth = useAuth();

  //check if user is already logged in on app start
  /*useEffect(()=>{
    auth.checkAuth();
  },[])*/

  //state for if app is loaded
  const [isReady, setIsReady] = useState(false);

  //check if user is already logged in on app start
  const restoreUser = async () => {
    auth.checkAuth();
  };

  //If App isn't ready display loading screen or 
  if (!isReady)
  return (
    <AppLoading startAsync={restoreUser} onError={()=> {setIsReady(true);console.log("error app loading")}} onFinish={() => setIsReady(true)} />
  );

  return (
    <NavigationContainer>
        <Drawer.Navigator 
          drawerContent={props => <DrawerContent {...props}/>}
          initialRouteName="Main" 
        >
          <Drawer.Screen name="Main" component={BottomTabNavigator} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}