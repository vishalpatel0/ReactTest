import React, { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({ count: 0, add: () => {} });

export const UserProvider = UserContext.Provider;

export function userData() {
  return useContext(UserContext);
}
