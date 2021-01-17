import React from 'react';
import { View } from 'react-native';

{/*Used in card component to break up sections*/}
function CardSection({style, children}) {
    return (<View style={[style,{paddingTop:10}]}>
        {children}
    </View>);
}

export default CardSection;