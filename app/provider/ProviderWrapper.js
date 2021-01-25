import React, { useState } from 'react';

import AuthContext from './auth/context';
import CtaContext from './cta/context';
import RepContext from './rep/context';
import AddrContext from './address/context';

function ProviderWrapper({ children }) {
    //Provider states
    const [user, setUser] = useState();
    const [reps, setReps] = useState();
    const [cta, setCta] = useState();
    const [addr, setAddr]  = useState();

    return (
        <RepContext.Provider  value={{reps, setReps}}>
            <AuthContext.Provider value={{ user, setUser }}>
                <CtaContext.Provider value={{ cta, setCta }}>
                    <AddrContext.Provider  value={{addr, setAddr}}>
                        {children}    
                    </AddrContext.Provider>
                </CtaContext.Provider>
            </AuthContext.Provider>
        </RepContext.Provider>
    );
}

export default ProviderWrapper;