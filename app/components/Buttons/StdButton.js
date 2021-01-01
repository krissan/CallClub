import React from "react";
import { Text, TouchableOpacity } from "react-native";

import colors from "../../config/colors";
import StdText from "../AppTexts/StdText";
import styles from "./styles";

function StdButton({ title, onPress, bgColor=colors.primary, txtColor=colors.tertiary}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <StdText style={[styles.text, {color:txtColor}]}>{title}</StdText>
    </TouchableOpacity>
  );
}

export default StdButton;
