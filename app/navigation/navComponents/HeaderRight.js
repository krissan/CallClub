import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons'

import NavButton from './NavButton';

import colors from '../../config/colors';
import styles from './styles';



function HeaderRight({navigation}) {
    let auth = true

    return (
        <NavButton onPress={()=>{console.log(1)}}>
            <FontAwesome5 name="user-circle" size={32} color={colors.tertiary}  style={styles.navBtn} />
        </NavButton>        
    );
}

export default HeaderRight;