import React, { useState, createContext } from 'react';

export const ApplicationContext = createContext('Xapp');

export const ApplicationProvider = ({children}) => {
  const [mySharedState, setMySharedState] = useState(null);

  return (
    <ApplicationContext.Provider
      value={{
        mySharedState,
        setMySharedState
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
