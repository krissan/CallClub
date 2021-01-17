import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import IssueScreen from "../../screens/Issue/IssueScreen";
import HeaderLeft from "../navComponents/HeaderLeft";
import GoBackButton from "../navComponents/GoBackButton";
import IssueEditorScreen from "../../screens/Issue/IssueEditorScreen";

import colors from "../../config/colors";
import global from "../../config/global";
import routes from "../routes";

const Stack = createStackNavigator();

const IssueNavigator = ({navigation}) => (
    <Stack.Navigator screenOptions={{
        headerTitleStyle:{
          fontFamily: global.primFont,
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
      initialRouteName={routes.Issues}>
      <Stack.Screen 
        name={routes.Issues}
        component={IssueScreen} 
        options={{
          headerLeft: () => (<HeaderLeft navigation={navigation}/>)
        }} />
      <Stack.Screen 
        name={routes.IssueEditor}
        component={IssueEditorScreen} 
        options={{
          headerLeft: () => (<GoBackButton navigation={navigation} destination={"Issues"} />)
        }} />
    </Stack.Navigator>
);

export default IssueNavigator;
