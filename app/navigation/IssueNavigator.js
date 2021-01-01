import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import IssueScreen from "../screens/IssueScreen";
import colors from "../config/colors";
import global from "../config/global";

import HeaderLeft from "./navComponents/HeaderLeft";
import HeaderRight from "./navComponents/HeaderRight";

const Stack = createStackNavigator();

const IssueNavigator = ({navigation}) => (

    <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor:colors.secondary, height: global.navHeight}, 
        headerTintColor: colors.tertiary
      }}>
      <Stack.Screen name="Issue" component={IssueScreen} options={{
          headerLeft: () => (<HeaderLeft navigation={navigation}/>), 
          headerRight: () => (<HeaderRight navigation={navigation}/>)
        }} />
    </Stack.Navigator>
);

export default IssueNavigator;
