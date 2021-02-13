import React, { Children } from 'react';
import { Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import StdText from '../AppTexts/StdText';

import styles from './styles';
import colors from '../../config/colors';
import global from '../../config/global';

function StdCheckBox({ check, onPress, inpColor = colors.secondary, chkColor=colors.primary, children}) {
    return (
        <>
            <TouchableOpacity onPress={onPress} style={{borderWidth:2, borderColor:inpColor, padding:2, height:20, width:20, marginRight:5}}>
                {check && <View style={{backgroundColor: chkColor, flex:1}}></View>}
            </TouchableOpacity>
            <StdText style={{fontWeight:"bold"}}>{children}</StdText>
        </>
    );
}

export default StdCheckBox;