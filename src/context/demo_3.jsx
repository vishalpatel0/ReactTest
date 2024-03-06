import React, { createContext, useContext, useState } from "react";

// Create the context
export const UserContext = createContext({ count: 0, add: () => {} });

// Create the provider component
export const UserProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Function to increment count
  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Value to be provided by the context
  const contextValue = {
    count: count,
    add: add,
  };

  // Return the provider with the provided value
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

// Custom hook to consume the context
export function useUserData() {
  return useContext(UserContext);
}
