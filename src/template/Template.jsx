import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import { UserProvider } from "../context/userContext";

const Template = () => {
  const [count, setCount] = useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <UserProvider value={{ count, add }}>
      <Header />
      <Outlet />
      <Footer />
    </UserProvider>
  );
};

export default Template;
