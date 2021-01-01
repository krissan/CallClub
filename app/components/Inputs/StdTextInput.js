import React from 'react';
import { TextInput, View} from 'react-native';

import styles from './styles';

import StdText from '..//AppTexts/StdText';
import colors from '../../config/colors';

function StdTextInput({ label, inpColor= colors.text, phColor=colors.inert, txtColor=colors.text, touched=false, error, maxLength=100, length, ...otherProps}) {

    return (
        <View style={{paddingBottom:15}}>
            {/* Header */}
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                {/* Label */}
                <StdText style={[styles.label,{color: inpColor,fontWeight:"bold"}]}>
                    {label}
                </StdText>
                {/* character count */}
                <StdText style={[styles.label]}>
                    {length+"/"+maxLength}
                </StdText>
            </View>
            {/* Text input */}
            <View style={[styles.stdField, {borderBottomColor: inpColor}]}>
                <TextInput style={{color: txtColor, fontSize:18, flex: 9}} {...otherProps} maxLength={maxLength}/>
            </View>
            {/*Display error if touched */}
            {   touched &&
                <View style={{alignItems:'flex-end'}}>
                    <StdText style={[styles.inline, {color:inpColor }]}>
                        {error}
                    </StdText>
                </View>
            }
        </View>        
    );
}

export default StdTextInput;