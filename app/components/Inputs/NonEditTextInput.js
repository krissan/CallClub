import React from 'react';
import { Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import StdText from '../AppTexts/StdText';

import styles from './styles';
import colors from '../../config/colors';
import global from '../../config/global';

function NonEditTextInput({ label, value, onPress, inpColor = colors.text, txtColor=colors.text}) {

    return (
        <TouchableOpacity onPress={onPress} >
            <View style={{ paddingBottom:global.inputBottomPad}} >
                {/* Header */}
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    {/* Label */}
                    <StdText txtColor={inpColor} style={[styles.label,{fontWeight:"bold"}]} >
                        {label}
                    </StdText>
                </View>
                {/* Text input */}
                <View style={[styles.stdField, {borderBottomColor: inpColor}]}>
                    <Text style={{color: txtColor, fontSize:18, flex: 9}} numberOfLines={1}>{value}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default NonEditTextInput;