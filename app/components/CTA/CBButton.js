import React from "react";
import { TouchableOpacity, View } from "react-native";
import Clipboard from 'expo-clipboard';

import StdText from '../AppTexts/StdText';

import colors from "../../config/colors";
import styles from "./styles";

function CBButton({ style, bgColor=colors.secondary, txtColor=colors.tertiary, cNumber="No Number"}) {
  return (
    <TouchableOpacity style={[style,{flex:1, backgroundColor: bgColor, flexDirection:"column"}]} onPress={()=>{Clipboard.setString(cNumber);}}>
        {/*Phone number button*/}
        <View style={[styles.actionButton,{backgroundColor: colors.tertiary, borderColor: bgColor, borderWidth: 3}]}>
            <StdText style={{color:bgColor, fontWeight:"bold", fontSize:16}}>{cNumber}</StdText>
        </View>
        {/*Label*/}
        <View style={styles.actionButton}>
            <StdText txtColor={txtColor} style={{fontWeight:"bold", fontSize:16}}>Copy To Clipboard</StdText>                            
        </View>
    </TouchableOpacity>
  );
}

export default CBButton;