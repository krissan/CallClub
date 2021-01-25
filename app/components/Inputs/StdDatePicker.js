import React from 'react';
import { View} from 'react-native';
import DatePicker from 'react-native-date-picker'

import styles from './styles';

import StdText from '..//AppTexts/StdText';
import colors from '../../config/colors';
import global from '../../config/global';

function StdDatePicker({ label, value, inpColor= colors.text, phColor=colors.inert, txtColor=colors.text, touched=false, error, ...otherProps}) {

    return (
        <View style={{ paddingBottom:global.inputBottomPad}}>
            {/* Header */}
            <View style={{flexDirection:"row"}}>
                {/* Label */}
                <StdText txtColor={inpColor} style={[styles.label,{fontWeight:"bold"}]}>
                    {label}
                </StdText>
            </View>
            {/* Date input */}
            <DatePicker
                date={date}
                onDateChange={setDate}
                {...otherProps}
                />
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

export default StdDatePicker;