import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { color } from "react-native-reanimated";

import colors from "../../config/colors";
import global from "../../config/global";
import StdText from "../AppTexts/StdText";
import styles from "./styles";

function StdPicker({style, label, value, list, onChange, bgColor=colors.primary, txtColor=colors.tertiary,...otherProps}) {

  return (
    <View style={{flexDirection:"column", paddingBottom:global.inputBottomHeight}}>
      {/*Label*/}
      <StdText style={{paddingBottom:10}}>{label}</StdText>
      {/*Options displayed in a row*/}
      <View style={{flexDirection:"row",flexWrap:"wrap"}}>
        {list.map((val, index) => {
          return (<TouchableOpacity
            key={index}
            style={val == value ? 
              [styles.picker, {backgroundColor: bgColor,borderColor: bgColor, borderTopWidth:2, borderBottomWidth:2, borderLeftWidth:1, borderRightWidth:1}, style] //selected
            :
              [styles.picker, {borderColor: bgColor, borderTopWidth:2, borderBottomWidth:2, borderLeftWidth:1, borderRightWidth:1}, style] //unselected
          }
            onPress={()=>onChange(val)}
            {...otherProps}
          >
            <StdText txtColor={val == value ? txtColor : bgColor} style={[styles.text, {paddingVertical:5,paddingHorizontal:20}]}>{val}</StdText>
          </TouchableOpacity>)
        })}
      </View>
    </View>
  );
}

export default StdPicker;
