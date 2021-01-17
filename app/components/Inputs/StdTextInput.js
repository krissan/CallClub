import React from 'react';
import { TextInput, View} from 'react-native';

import styles from './styles';

import StdText from '..//AppTexts/StdText';
import colors from '../../config/colors';
import global from '../../config/global';

function StdTextInput({ label, inpColor= colors.text, phColor=colors.inert, txtColor=colors.text, touched=false, error, maxLength, length, ...otherProps}) {

    return (
        <View style={{ paddingBottom:global.inputBottomPad}}>
            {/* Header */}
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                {/* Label */}
                <StdText txtColor={inpColor} style={[styles.label,{fontWeight:"bold"}]}>
                    {label}
                </StdText>
                {/* character count */}
                {maxLength && <StdText style={[styles.label]}>
                    {length+"/"+maxLength}
                </StdText>}
            </View>
            {/* Text input */}
            <View style={[styles.stdField, {borderBottomColor: inpColor}]}>
                <TextInput style={{color: txtColor, fontSize:18, flex: 9}} {...otherProps} maxLength={maxLength}/>
            </View>
            {/*Display error if touched */}
            <View style={{alignItems:'flex-end', height:global.inputBottomHeight }}>
                {   touched &&
                <StdText txtColor={inpColor} style={[styles.inline]}>
                    {error}
                </StdText>
                }
            </View>
        </View>        
    );
}

export default StdTextInput;