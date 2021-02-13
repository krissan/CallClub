import React from "react";
import { Text } from "react-native";

import styles from  './styles';
import colors from '../../config/colors';

function StdText({ children, txtColor=colors.text , style }) {
  return <Text style={[styles.text, {color: txtColor}, style]}>{children}</Text>;
}

export default StdText;