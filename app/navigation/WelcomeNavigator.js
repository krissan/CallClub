import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import colors from "../config/colors";
import global from "../config/global";

import HeaderLeft from "./navComponents/HeaderLeft";
import HeaderRight from "./navComponents/HeaderRight";

const Stack = createStackNavigator();

const WelcomeNavigator = ({navigation}) => (

    <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor:colors.secondary, height: global.navHeight}, 
        headerTintColor: colors.tertiary
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
          headerLeft: () => (<HeaderLeft navigation={navigation}/>), 
          headerRight: () => (<HeaderRight navigation={navigation}/>)
        }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{
          headerLeft: () => (<HeaderLeft navigation={navigation}/>), 
          headerRight: () => (<HeaderRight navigation={navigation}/>)
        }}/>
      <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{headerLeft: () => {<HeaderLeft navigation={navigation}/>}, headerRight: () => {<HeaderRight navigation={navigation}/>}}}/>
    </Stack.Navigator>
);

export default WelcomeNavigator;
