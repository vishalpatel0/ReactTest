import React, { createContext, useContext, useEffect } from "react";

// ------------   Context API
// --------- 1 ----------- Create  >  createContext();
// --------- 2 ----------- Provider > createContext.Provider
// --------- 3 ----------- Use >  useContext(createContext)

export const UserDataContext = createContext({
  name: "vishal",
  update: () => {},
});

{
  /* <CounterContext.Provider value={0}>
<App />
</CounterContext.Provider>;
useContext(CounterContext); */
}
