import React from 'react';
import { View } from 'react-native';

function CardSection({style, children}) {
    return (<View style={[style,{paddingTop:10}]}>
        {children}
    </View>);
}

export default CardSection;