import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../../screens/Auth/LoginScreen";
import CreateAccountScreen from "../../screens/Auth/CreateAccountScreen";
import WelcomeScreen from "../../screens/WelcomeScreen";

import routes from "../routes";

const Stack = createStackNavigator();

const WelcomeNavigator = ({navigation}) => (

    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={routes.Login}>
      <Stack.Screen 
        name={routes.Welcome}
        options={{title:'Overview'}} 
        component={WelcomeScreen} 
      />
      <Stack.Screen 
        name={routes.Login}
        component={LoginScreen} 
        />
      <Stack.Screen 
        name={routes.Register}
        component={CreateAccountScreen} 
        />
    </Stack.Navigator>
);

export default WelcomeNavigator;
