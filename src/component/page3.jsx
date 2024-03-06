import React, { useContext } from "react";
import { UserData } from "../context/test";

const Page3 = () => {
  const mydata = useContext(UserData);
  return (
    <div>
      this is page 3 <br />
      <button onClick={mydata.update}>Click on page 3 </button>
      <h1>{mydata.name}</h1>
    </div>
  );
};

export default Page3;
