import React from "react";
import { TouchableOpacity, View } from "react-native";

import colors from "../../config/colors";
import styles from "./styles";

function PageTab({onPress, bgColor=colors.inert}) {
  return (
    <TouchableOpacity
    style={{flex:1, flexDirection:"row"}}
      onPress={onPress}
    >
        <View style={[styles.triangleCornerLeft, {borderBottomColor:bgColor}]}></View>
        <View style={[styles.pageTab, {backgroundColor: bgColor}]}/>
        <View style={[styles.triangleCornerRight, {borderTopColor:bgColor}]}></View>
    </TouchableOpacity>
  );
}

export default PageTab;