import React, { useContext, useEffect } from "react";
import Page3 from "./page3";
import { UserData } from "../context/test";

const Page2 = () => {
  const { name, update } = useContext(UserData);

  return (
    <div>
      this is Page 2<br />
      <button onClick={update}> click page 2 </button>
      {/* <h1>{name}</h1> */}
      <Page3 />
    </div>
  );
};

export default Page2;
