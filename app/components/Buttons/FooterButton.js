import React from "react";
import { TouchableOpacity } from "react-native";

import colors from "../../config/colors";
import StdText from "../AppTexts/StdText";
import styles from "./styles";

function FooterButton({style, title, onPress, bgColor=colors.primary, txtColor=colors.tertiary}) {
  return (
    <TouchableOpacity
      style={[ styles.button, styles.footerButton, style, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <StdText txtColor={txtColor} style={[styles.text]}>{title}</StdText>
    </TouchableOpacity>
  );
}

export default FooterButton;