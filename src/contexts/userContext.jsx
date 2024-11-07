import React, { createContext, useContext, useState } from 'react';

// Context
const UserContext = createContext();

// Provider (we need to WRAP our parent on this) Check app.jsx
export const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState({
    username: 'angel',
    usermail: '',
    pet: {
      name: 'Pet Name',
      specie: '',
      age: '1'
    }
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context
export const useUser = () => {
  return useContext(UserContext);
};

