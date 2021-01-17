import React from 'react';
import { TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import StdText from '..//AppTexts/StdText';

import styles from './styles';
import colors from '../../config/colors';

function FancyInput({ label, onPress, icon, inpColor=colors.primary, phColor=colors.primary, txtColor=colors.text, ...otherProps}) {
    return (
        <View style={{flex: 1,justifyContent: 'space-between'}}>
            {/*Label*/}
            <StdText style={[styles.subTitle, {color: colors.tertiary}]}>
                {label}
            </StdText>
            {/*Text input with icon passed through button at the end*/}
            <View style={{ flexDirection: "row", borderBottomColor: inpColor, borderBottomWidth: 2}}>
                <TextInput placeholderTextColor={phColor} style={{color: txtColor, fontSize:18, fontWeight:"bold", flex: 7}} {...otherProps}/>
                <MaterialIcons name={icon} size={32} color={colors.primary} style={{flex:1, paddingHorizontal:10}} />
            </View>
        </View>        
    );
}

export default FancyInput;