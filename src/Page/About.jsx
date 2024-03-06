import React from "react";
import { userData } from "../context/userContext";

const About = () => {
  const { count, add } = userData();
  return (
    <div>
      About {count}
      <br />
      <button onClick={() => add()}>click </button>
    </div>
  );
};

export default About;
