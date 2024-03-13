import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../methord/userSlice";

const About = () => {
  const { name, setName } = useState();
  const dispatch = useDispatch();

  function adduser(e) {
    // e.preventDefault();
    // dispatchs(addUser(name));
  }

  return (
    <div>
      Start Redux toolkit
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button onClick={adduser}>add </button>
    </div>
  );
};

export default About;
