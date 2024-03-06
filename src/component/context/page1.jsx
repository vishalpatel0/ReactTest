import React, { useState, useEffect } from "react";
import Page2 from "./page2";
import { UserData } from "../../context/demo_2";

const Page1 = () => {
  const [name, setName] = useState("name");

  function update() {
    setName(Date.now());
  }

  return (
    <UserData.Provider value={{ name, update }}>
      <div className="p-4 m-4">
        <h1>Context API use :-</h1>
        this is page 1 <br />
        dynamic value : {name}
        <hr />
        <br />
        <br />
        <Page2 />
      </div>
    </UserData.Provider>
  );
};

export default Page1;
