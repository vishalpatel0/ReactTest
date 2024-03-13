import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
const Home = () => {
  const { count, add } = useContext(UserContext);

  return (
    <>
      <div className="container row">
        <div className="col-6 p-4 ">React Install</div>
        <div className="col-6  p-4  ">
          React Component
          <br />
          js file JSX file
          <br />
          Props pass in Component
          <br />
          useState
          <br />
          input feels value set
          <br />
          create funtion
          <br />
          Input data store in arry or object
          <br />
          Create Counter using useState
          <br />
          Create Counter with useState, Component and Props <br />
        </div>
        <div className="col-6 p-4">
          Start react-router-dom install <br />
          createBrowserRouter using 2 method <br />
          use RouterProvider to apply createBrowserRouter to website <br />
          use Link as a-tag <br />
          use useParams to pass value in url <br />
          use Outlet to get children page or component <br />
          create template page for nav bar and footer <br />
        </div>
        <div className="col-6 p-4">
          Start Context APi <br />
          <ul>
            <li>1. Create Context</li>
            <li>2. Provider use in perent</li>
            <li>3. Use Context</li>
          </ul>
          <br />
        </div>
        <div className="col-6 p-4">Start Redux toolkit</div>
      </div>
      <hr />
      demo for Context API use : <button onClick={add}>click {count}</button>
    </>
  );
};

export default Home;
