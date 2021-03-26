import React from "react";
import {  View } from "react-native";

import global from "../../config/global";

{/*used for main content of page*/}
function Body({ children, style }) {
  return (
    <View style={[style, {padding:global.screenPad, flex:1}]}>
        {children}
    </View>
  );
}

export default Body;