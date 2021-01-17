import React from 'react';
import { TextInput, View} from 'react-native';

import StdText from '../AppTexts/StdText';

import styles from './styles';
import colors from '../../config/colors';

function BoxTextInput({ style, label, inpColor= colors.text, phColor=colors.inert, txtColor=colors.text, touched=false, error, maxLength, length, ...otherProps}) {

    return (
        <View style={{ paddingBottom:15}}>
            {/* Header */}
            <View style={{flexDirection:"row", justifyContent:"space-between", paddingBottom:5}}>
                {/* Label */}
                <StdText style={[styles.label,{color: inpColor,fontWeight:"bold"}]}>
                    {label}
                </StdText>
                {/* character count */}
                {maxLength && <StdText style={[styles.label]}>
                    {length+"/"+maxLength}
                </StdText>}
            </View>
            {/* Text input */}
            <View style={[styles.stdBox,style,{borderColor:inpColor}]}>
                <TextInput style={{color: txtColor, fontSize:18, flex: 9, textAlignVertical:"top"}} {...otherProps} maxLength={maxLength}/>
            </View>
            {/*Display error if touched */}
            {touched &&
                <View style={{alignItems:'flex-end'}}>
                    <StdText style={[styles.inline, {color:inpColor }]}>
                        {error}
                    </StdText>
                </View>
            }
        </View>        
    );
}

export default BoxTextInput;