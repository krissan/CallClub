import React from 'react';
import { ActivityIndicator } from 'react-native';

import colors from '../../config/colors';


function LoadIcon() {
    return (
        <ActivityIndicator color={colors.tertiary}/>
    );
}

export default LoadIcon;