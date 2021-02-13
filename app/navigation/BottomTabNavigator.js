
import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'

import RepresentativeNavigator from "./screenNavigators/RepresentativeNavigator";
import IssueNavigator from "./screenNavigators/IssueNavigator";
import AccountNavigator from "./screenNavigators/AccountNavigator";

import colors from "../config/colors";
import useAuth from "../provider/auth/useAuth";
import routes from "./routes";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  const auth = useAuth();
  
  return (
    <Tab.Navigator
      initialRouteName={auth.user ? routes.Issues  : routes.Account}
      barStyle={{ backgroundColor: colors.secondary }}
    >
      <Tab.Screen
        name={routes.Representatives}
        component={RepresentativeNavigator}
        options={{
          tabBarLabel: 'Reps',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-balance" size={18} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name={routes.Issues}
        component={IssueNavigator}
        options={{
          tabBarLabel: 'Issue',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="fist-raised" size={18} color={color} />
          ),
        }}
      />
      
      {auth.user ?
        <Tab.Screen
          name={routes.Account}
          component={AccountNavigator}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user-alt" size={18} color={color} />
            ),
          }}
        />
        :
        <Tab.Screen
          name={routes.Account}
          component={AccountNavigator}
          options={{
            tabBarLabel: 'Welcome',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="question-circle" size={22} color={color} />
            ),
          }}
        />
      }
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;