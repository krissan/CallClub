import React, { useState } from 'react';

import AuthContext from './auth/context';
import RepContext from './rep/context';
import AddrContext from './address/context';

function ProviderWrapper({ children }) {
    //Provider states
    const [user, setUser] = useState();
    const [reps, setReps] = useState();
    const [addr, setAddr]  = useState('');

    return (
        <RepContext.Provider  value={{reps, setReps}}>
            <AuthContext.Provider value={{ user, setUser }}>
                    <AddrContext.Provider  value={{addr, setAddr}}>
                        {children}    
                    </AddrContext.Provider>
            </AuthContext.Provider>
        </RepContext.Provider>
    );
}

export default ProviderWrapper;