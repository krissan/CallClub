import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HeaderLeft from "../navComponents/HeaderLeft";
import RepresentativeScreen from "../../screens/RepresentativeScreen";

import colors from "../../config/colors";
import global from "../../config/global";
import routes from "../routes";

const Stack = createStackNavigator();

const RepresentativeNavigator = ({navigation}) => (

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
      initialRouteName={routes.Representatives}>
      <Stack.Screen 
        name={routes.Representatives}
        component={RepresentativeScreen} 
        options={{
          headerLeft: () => (<HeaderLeft navigation={navigation}/>)
        }} />
    </Stack.Navigator>
);

export default RepresentativeNavigator;
