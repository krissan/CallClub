import React from "react";
import { TouchableOpacity, View } from "react-native";

import StdText from '../AppTexts/StdText';

import colors from "../../config/colors";
import styles from "./styles";

function CBButton({ style, bgColor=colors.secondary, txtColor=colors.tertiary, cNumber="No Number"}) {
  return (
    <TouchableOpacity style={[style,{flex:1, backgroundColor: bgColor, flexDirection:"column"}]} onPress={console.log("copied "+cNumber)}>
        {/*Phone number button*/}
        <View style={[styles.actionButton,{backgroundColor: colors.tertiary, borderColor: bgColor, borderWidth: 3}]}>
            <StdText style={{color:bgColor, fontWeight:"bold", fontSize:18}}>{cNumber}</StdText>
        </View>
        {/*Label*/}
        <View style={styles.actionButton}>
            <StdText style={{color:txtColor, fontWeight:"bold", fontSize:12}}>Copy To Clipboard</StdText>                            
        </View>
    </TouchableOpacity>
  );
}

export default CBButton;