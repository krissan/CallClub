import React from "react";
import { TouchableOpacity } from "react-native";

import LoadIcon from "../Misc/LoadIcon";

import colors from "../../config/colors";
import StdText from "../AppTexts/StdText";
import styles from "./styles";

function StdButton({style, title, onPress, loading, bgColor=colors.primary, txtColor=colors.tertiary}) {
  return (
    <TouchableOpacity
      style={[ styles.button, { backgroundColor: bgColor }, style]}
      onPress={onPress}
    >
      {!loading ?  <StdText txtColor={txtColor} style={[styles.text]}>{title}</StdText> : <LoadIcon/>}
    </TouchableOpacity>
  );
}

export default StdButton;
