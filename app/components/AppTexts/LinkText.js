import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from  './styles';

function LinkText({ children, style }) {
  return <TouchableOpacity><Text style={[styles.linkText, style]}>{children}</Text></TouchableOpacity>;
}

export default LinkText; 