import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'

import NavButton from './NavButton';

import colors from '../../config/colors';
import styles from './styles';



function HeaderLeft({navigation}) {
    return (
        <NavButton onPress={()=>{navigation.openDrawer()}}>
            <MaterialIcons name="menu" size={22} color={colors.tertiary} style={[styles.navBtn, {fontWeight: "normal"}]} />
        </NavButton>                    
    );
}

export default HeaderLeft;