import React from 'react';
import { View } from 'react-native';

import global from '../../config/global';

{/* used in form component to break up sections */}
function FormSection({style, children}) {
    return (<View style={[style,{paddingVertical:global.screenPad}]}>
        {children}
    </View>);
}

export default FormSection;