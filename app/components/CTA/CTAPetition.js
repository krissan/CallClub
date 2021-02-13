import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'

import colors from "../../config/colors";
import styles from "../Buttons/styles";

function CTAPetition(id, petition, handleStatus=()=>{}) {
  return (
    <TouchableOpacity style={[style, styles.actionButton, {backgroundColor: bgColor}]} onPress={() =>{console.log("called "+cNumber)}}>
        <Feather name="phone-call" size={32} color={txtColor} />
    </TouchableOpacity>
  );
}

export default CTAPetition;