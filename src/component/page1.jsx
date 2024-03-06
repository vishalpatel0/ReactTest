import React, { useState, useEffect } from "react";
import Page2 from "./page2";
import { UserData } from "../context/test";

const Page1 = () => {
  const [name, setName] = useState("name");

  function update() {
    setName(Date.now());
  }

  return (
    <UserData.Provider value={{ name, update }}>
      <div className="p-4 m-4">
        this is page 1{name}
        <Page2 />
      </div>
    </UserData.Provider>
  );
};

export default Page1;
