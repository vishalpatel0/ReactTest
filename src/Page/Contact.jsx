import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../methord/userSlice";
import { useSelector } from "react-redux";
const Contact = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.users);
  console.log(userInfo);
  // // const [counter, setCounter] = useState(0);

  // function add() {
  //   setCounter((no) => (no += 1));
  // }

  return (
    <div>
      <button
        onClick={() => {
          dispatch(addUser({ id: 2, name: "John" }));
        }}
      >
        CLick
      </button>
    </div>
  );
};

export default Contact;
