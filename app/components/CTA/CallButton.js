import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'

import colors from "../../config/colors";
import styles from "./styles";

function CallButton({style, onPress, bgColor=colors.primary, txtColor=colors.tertiary}) {
  return (
    <TouchableOpacity style={[style, styles.actionButton, {backgroundColor: bgColor}]} onPress={onPress}>
        <Feather name="phone-call" size={32} color={txtColor} />
    </TouchableOpacity>
  );
}

export default CallButton;