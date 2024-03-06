import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
const Home = () => {
  const { count, add } = useContext(UserContext);

  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          <div className="col">{/* <Link to="about">About</Link> */}</div>
          <div className="col">
            <button onClick={add}>click {count}</button>
          </div>
          <div className="col">One of three columns</div>
        </div>
        <div className="row align-items-center">
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
        </div>
        <div className="row align-items-end">
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
        </div>
      </div>
    </>
  );
};

export default Home;
