import React, { useContext } from "react";
import { UserData } from "../../context/demo_2";

const Page3 = () => {
  const mydata = useContext(UserData);
  return (
    <div>
      this is page 3 <br />
      dynamic button : <button onClick={mydata.update}>Click on page 3 </button>
      <hr />
      <br />
      dynamic value: <h1>{mydata.name}</h1>
    </div>
  );
};

export default Page3;
