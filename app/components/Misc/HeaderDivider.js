import React from "react";
import { View } from "react-native";

import StdText from "../AppTexts/StdText";

import colors from "../../config/colors";

function HeaderDivider({ children, style, color=colors.secondary}) {
  return <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingVertical:10}}>
        {/*Divider Bar*/}
        <View style={{height:3,backgroundColor:color, flex:1}}></View>
        {/*Text*/}
        <View style={{paddingHorizontal:15, flex:2}}>
            <StdText style={{fontWeight:"bold", textAlign:"center"}} txtColor={color}>{children}</StdText>
        </View>
        {/*Divider Bar*/}
        <View style={{height:3,backgroundColor:color, flex:1}}></View>
    </View>;
}

export default HeaderDivider;