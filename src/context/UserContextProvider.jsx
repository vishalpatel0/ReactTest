import React, { createContext } from "react";
import UserContext from "./userContext";
export const UserContextProvider = ({ children }) => {
  const no = 0;

  return (
    <>
      <UserContext.Provider>{children}</UserContext.Provider>
    </>
  );
};
