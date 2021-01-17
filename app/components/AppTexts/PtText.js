import React from "react";
import { Text, View } from "react-native";

import colors from "../../config/colors";
import styles from  './styles';

function PtText({ children, style, ptColor = colors.secondary, txtColor = colors.text }) {
  return (<View style={[styles.ptComp, {flexDirection:"row"}]}>
    {/*Styled Point*/}
    <View style={[styles.pt, {borderColor: ptColor}]}/>
    {/*Text*/}
    <Text style={[styles.text, styles.ptText, style, {color: txtColor}]}>{children}</Text>
  </View>);
}

export default PtText;