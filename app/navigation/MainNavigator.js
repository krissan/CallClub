import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import IssueNavigator from "./IssueNavigator";
import WelcomeNavigator from './WelcomeNavigator';
import Test from '../screens/Test'

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="About" 
        >
        <Drawer.Screen name="About" component={WelcomeNavigator} />
        <Drawer.Screen name="Issue" component={IssueNavigator} />
        <Drawer.Screen name="Test" component={Test} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}