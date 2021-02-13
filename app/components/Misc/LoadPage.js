import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import colors from '../../config/colors';


function LoadPage({color=colors.primary, size='large'}) {
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
            <ActivityIndicator color={color} size={size} />
        </View>
    );
}

export default LoadPage;