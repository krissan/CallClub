import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../../screens/Auth/LoginScreen";
import CreateAccountScreen from "../../screens/Auth/CreateAccountScreen";
import WelcomeScreen from "../../screens/WelcomeScreen";
import HeaderLeft from "../navComponents/HeaderLeft";
import GoBackButton from "../navComponents/GoBackButton";

import routes from "../routes";
import colors from "../../config/colors";

const Stack = createStackNavigator();

const WelcomeNavigator = ({navigation}) => (

    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}
      initialRouteName={routes.Welcome}>
      <Stack.Screen 
        name={routes.Welcome}
        options={{
          title:'Overview',
          headerLeft: () => (<HeaderLeft navigation={navigation}/>)
      }} 
        component={WelcomeScreen} 
      />
      <Stack.Screen 
        name={routes.Login}
        component={LoginScreen} 
        options={{
          headerLeft: () => (<GoBackButton navigation={navigation} destination={routes.Welcome} />)
        }} 
        />
      <Stack.Screen 
        name={routes.Register}
        component={CreateAccountScreen} 
        options={{
          headerLeft: () => (<GoBackButton navigation={navigation} destination={routes.Welcome} />)
        }} 
        />
    </Stack.Navigator>
);

export default WelcomeNavigator;
