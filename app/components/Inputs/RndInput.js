import React from 'react';
import { TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import colors from '../../config/colors';

function RndInput({ label, onPress, icon, inpColor=colors.tertiary, phColor=colors.inert, txtColor=colors.text, ...otherProps}) {
    return (
            <View style={{backgroundColor: inpColor, height:40, width:105, alignItems:"center", borderRadius:50, flexDirection: "row", justifyContent:"space-between",}}>
                <TextInput style={{backgroundColor: inpColor, color: txtColor, marginLeft: 15, fontSize:14, flex: 1}}  {...otherProps} />
                <MaterialIcons name={icon} size={24} color={colors.text} style={{marginRight:10}} />
            </View>
    );
}

export default RndInput;
