import React, { useState } from 'react';

import AuthContext from './auth/context';
import RepContext from './rep/context';

function ProviderWrapper({ children }) {
  //Provider states
  const [user, setUser] = useState();
  const [reps, setReps] = useState();

    return (
        <RepContext.Provider  value={{reps, setReps}}>
            <AuthContext.Provider value={{ user, setUser }}>
                {children}    
            </AuthContext.Provider>
        </RepContext.Provider>
    );
}

export default ProviderWrapper;