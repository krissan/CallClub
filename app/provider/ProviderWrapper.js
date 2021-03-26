import React, { useState } from 'react';

import AuthContext from './auth/context';
import RepContext from './rep/context';
import AddrContext from './address/context';
import IssueContext from './issue/context';

function ProviderWrapper({ children }) {
    //Provider states
    const [user, setUser] = useState();
    const [reps, setReps] = useState([]);
    const [addr, setAddr]  = useState('');
    const [issue, setIssue] = useState({});

    return (
        <IssueContext.Provider value={{issue, setIssue}}>
            <RepContext.Provider  value={{reps, setReps}}>
                <AuthContext.Provider value={{ user, setUser }}>
                        <AddrContext.Provider  value={{addr, setAddr}}>
                            {children}    
                        </AddrContext.Provider>
                </AuthContext.Provider>
            </RepContext.Provider>
        </IssueContext.Provider>
    );
}

export default ProviderWrapper;