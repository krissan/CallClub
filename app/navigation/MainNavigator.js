import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import DrawerContent from './navComponents/DrawerContent';
import BottomTabNavigator from './BottomTabNavigator';

import useAuth from '../auth/useAuth';

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  const auth = useAuth();

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