import React from "react";
import { Text } from "react-native";
import styles from  './styles';

function HeaderText({ children, style, txtColor, ...otherProps }) {
  return <Text style={[styles.header, style, {color: txtColor}]} {...otherProps}>{children}</Text>;
}

export default HeaderText;