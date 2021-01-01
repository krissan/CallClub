import React from 'react';
import { View } from 'react-native';

import global from '../../config/global';

function FormSection({style, children}) {
    return (<View style={[style,{paddingVertical:global.screenPad}]}>
        {children}
    </View>);
}

export default FormSection;