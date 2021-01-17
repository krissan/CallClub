import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

import StdText from "../AppTexts/StdText";

import colors from "../../config/colors";

function RoundPlusButton({style, title, onPress, bgColor=colors.primary, txtColor=colors.tertiary}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={[style,{backgroundColor:bgColor,width:130,paddingHorizontal:10, paddingVertical:5, flexDirection:"row", justifyContent:"space-between", borderRadius:20,alignItems:"center" }]}>
            <MaterialIcons name={"add-circle-outline"} size={24} color={colors.tertiary} />
            <StdText txtColor={txtColor} style={{fontWeight:"bold"}}>{title}</StdText>
        </View>
    </TouchableOpacity>
  );
}

export default RoundPlusButton;