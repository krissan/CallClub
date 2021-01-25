import React from "react";
import { View } from "react-native";

import StdText from "../AppTexts/StdText";

import colors from "../../config/colors";

function LabeledItem({ children, style, label, color=colors.secondary}) {
  return <View style={{paddingBottom:10}}>
      <StdText style={[style, {fontWeight:"bold", paddingRight:10, paddingBottom:5}]} txtColor={color}>{label}</StdText>
      <StdText style={[style]} txtColor={color}>{children ? children : "N/A"}</StdText>
    </View>;
}

export default LabeledItem;