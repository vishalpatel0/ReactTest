import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  let data = useParams();

  console.log(data);

  return <div>User {data.userId}</div>;
};

export default User;
