import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HeaderLeft from "../navComponents/HeaderLeft";
import AccountScreen from "../../screens/Auth/AccountScreen";
import WelcomeNavigator from "./WelcomeNavigator";

import colors from "../../config/colors";
import global from "../../config/global";
import routes from "../routes";

const Stack = createStackNavigator();

const AccountNavigator = ({navigation}) => {
  const auth = useAuth();

  return (
    <Stack.Navigator screenOptions={{
        headerTitleStyle:{
          fontFamily:global.primFont,
          fontWeight: "bold",
          fontSize:16
        },
        headerTitleAlign:"center",
        headerStyle: {
          height: global.navHeight,
          backgroundColor:colors.secondary, 
        }, 
        headerTintColor: colors.tertiary
      }}
      initialRouteName={routes.Account}
    >
      {auth.user ? 
        <Stack.Screen 
          name={routes.Account}
          component={AccountScreen} 
          options={{
            headerLeft: () => (<HeaderLeft navigation={navigation}/>)
          }} />
      : 
        <Stack.Screen 
          name={routes.Welcome}
          options={{title:'Overview'}} 
          component={WelcomeNavigator} 
          options={{
            headerLeft: () => (<HeaderLeft navigation={navigation}/>)
          }} />
      }
    </Stack.Navigator>
  )
}

export default AccountNavigator;
