import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'

import NavButton from './NavButton';

import colors from '../../config/colors';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';


function GoBackButton({destination}) {
    const navigation = useNavigation();

    return (
        <NavButton onPress={()=>{navigation.navigate(destination)}}>
            <MaterialIcons name="arrow-back" size={22} color={colors.tertiary} style={[styles.navBtn, {fontWeight: "normal"}]}/>
        </NavButton>                    
    );
}

export default GoBackButton;